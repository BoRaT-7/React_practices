export default function Allfriends({friend}){
    const {name,email}= friend;
    return(
        <div className="box">
          <p>  Name:{name}</p>
         <p>   Email:{email}</p>
        </div>
    )
}