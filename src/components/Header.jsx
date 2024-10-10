import React, { memo } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Use Memo
const Header = memo(() => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)
  // console.log("header render");
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen  flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="LogoNetflix"
      />
      {user && (<div className="flex p-2 gap-1">
        <img className="w-12 h-12 rounded-full" alt="userIcon" src={user.photoURL} />              
        <button  onClick={handleSignOut}
          className="font-bold -mt-5 text-black 
      "
        >
          (Sign Out)
        </button>
      </div>)
    }
    </div>
  );
});

export default Header;

// const Header = () => {
//   console.log("header render without memo");

//   return (
//     <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
//       <img className='w-44 '
//       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="LogoNetflix"/></div>
//   )
//  }
// export default Header;
