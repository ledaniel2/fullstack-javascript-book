<Route path='/protected' render={() => (
  authUser
    ? <ProtectedRoute />
    : <Redirect to='/login' />
)}/>
