import { ApiProvider } from './ApiProvider';
import { ConfigProvider } from './ConfigProvider/ConfigProvider';
import { AuthProvider } from './AuthProvider';

export function AppProvider({ children }) {
  return (
    <ApiProvider>
      <ConfigProvider>
        <AuthProvider>{children}</AuthProvider>
      </ConfigProvider>
    </ApiProvider>
  );
}
