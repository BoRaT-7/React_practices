
const Countryname = ({Country}) => {
    const {name,flags} = Country;
    return (
        <div className="Country">
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            
        </div>
    );
};

export default Countryname;