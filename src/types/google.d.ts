
interface GoogleAccountsId {
  initialize: (config: {
    client_id: string;
    callback: (response: any) => void;
    auto_select?: boolean;
  }) => void;
  prompt: (notification?: any) => void;
  renderButton: (
    element: HTMLElement,
    options: {
      type?: string;
      theme?: string;
      size?: string;
      text?: string;
      shape?: string;
      width?: number | string;
      logo_alignment?: string;
    }
  ) => void;
}

interface GoogleAccounts {
  id: GoogleAccountsId;
}

interface Google {
  accounts: GoogleAccounts;
}

interface Window {
  google?: Google;
  onGoogleLibraryLoad?: () => void;
}
