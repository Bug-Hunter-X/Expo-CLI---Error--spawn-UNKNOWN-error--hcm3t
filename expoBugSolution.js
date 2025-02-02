The "spawn UNKNOWN error" in Expo CLI is often caused by underlying system issues, resource conflicts, or problems with the Node.js or Expo CLI installations themselves.  In this case, a simple system restart often resolves the issue by clearing any temporary processes or resource locks that might be interfering with the Expo development server.  

If the problem persists after restarting your computer, more thorough troubleshooting is necessary:

1. **Check for port conflicts:** The Expo development server typically uses a specific port (e.g., 19000 or 19001). If another application is already using this port, it can cause the error. Use `lsof -i :19000` (on macOS/Linux) or `netstat -a -b` (on Windows) to identify any processes using that port and close them.
2. **Examine your system logs:** Check for any error messages related to Expo or Node.js in your system's logs, which can provide more specific clues about the problem.
3. **Reinstall Node.js and Expo CLI:** Make sure you have the latest versions of Node.js and Expo CLI installed and that they are properly configured.  Consider using a Node.js version manager like nvm or nvm-windows to manage different Node.js versions.
4. **Check environment variables:** Certain environment variables may interfere with Expo CLI's operation. Try removing or altering environment variables related to network, process management, or package management.
5. **Update your project:** Ensure that your project dependencies are up to date using `expo update` or `npm update`.

If the problem persists after attempting the above steps, provide additional information about your environment (Operating System, Node.js Version, Expo CLI Version, etc.) to narrow down the possible causes.