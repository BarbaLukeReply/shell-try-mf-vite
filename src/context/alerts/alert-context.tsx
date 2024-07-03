import { createContext, useState, ReactNode, FC, useContext, useRef } from "react";
import { Alert, AlertsWrapper } from "./Alert";

export interface AlertType {
  id: string;
  message: string;
  severity: "info" | "warning" | "error" | "success";
  timeout?: number;
}

interface AlertsContextType {
  alerts: AlertType[];
  addAlert: (alert: Omit<AlertType, 'id'>) => string; // Returns the id of the added alert
  dismissAlert: (id: string) => void;
}

const AlertsContext = createContext<AlertsContextType | undefined>(undefined);

interface AlertsProviderProps {
  children: ReactNode;
}

const AlertsProvider: FC<AlertsProviderProps> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const addAlert = (alert: Omit<AlertType, 'id'>): string => {
    const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36);
    setAlerts((prev) => [{ ...alert, id }, ...prev]);
    return id;
  };

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertsContext.Provider value={{ alerts, addAlert, dismissAlert }}>
      <AlertsWrapper>
        {alerts.map((alert) => (
          <Alert key={alert.id} {...alert} handleDismiss={() => dismissAlert(alert.id)} />
        ))}
      </AlertsWrapper>
      {children}
    </AlertsContext.Provider>
  );
};

const useAlerts = () => {
  const [alertIds, setAlertIds] = useState<string[]>([]);
  const alertIdsRef = useRef<string[]>(alertIds);
  const context = useContext(AlertsContext);

  if (!context) {
    throw new Error('useAlerts must be used within an AlertsProvider');
  }

  const { addAlert, dismissAlert } = context;

  const addAlertWithId = (alert: Omit<AlertType, 'id'>) => {
    const id = addAlert(alert);
    alertIdsRef.current.push(id);
    setAlertIds([...alertIdsRef.current]);
  };

  const clearAlerts = () => {
    alertIdsRef.current.forEach((id) => dismissAlert(id));
    alertIdsRef.current = [];
    setAlertIds([]);
  };

  return { addAlert: addAlertWithId, clearAlerts };
};

export { AlertsProvider, useAlerts };