import React, { useEffect, useContext, useState } from 'react';

import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from '../shared/context/auth-context';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import Card from '../shared/components/UIElements/Card';

const MainPage = () =>{
   
    
    
        return(
            <Card>
            <div className="center">
               You are signed in  
            </div>
            </Card>
         );
    
  
}

export default MainPage ;