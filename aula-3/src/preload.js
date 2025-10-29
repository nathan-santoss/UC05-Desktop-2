import { contextBridge } from "electron";
contextBridge.exposeInIsolatedWorld('api', {
    
})