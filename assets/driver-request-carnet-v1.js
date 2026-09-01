/* DIGIY DRIVER — dépôt public d'une demande dans le carnet privé */
window.DIGIY_DRIVER_REQUEST_CARNET_V1={
  async save(payload){
    try{
      const response=await fetch('https://wesqmwjjtsefyjnluosj.supabase.co/functions/v1/driver-client-request',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
      });
      return response.ok;
    }catch(_){
      return false;
    }
  }
};