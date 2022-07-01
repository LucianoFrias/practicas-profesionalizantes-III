class FormModel
{ 
  constructor()
  {
    
  }
   
  submit( data )
  {
    return fetch ('./backend/login.php', {method: 'post', body: JSON.stringify(data)} ).then( response => response.json());
  }


}

export { FormModel };