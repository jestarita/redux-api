import React, {ChangeEvent} from 'react';
const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];
const Home = () =>{
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([] as any);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
       setSearchTerm(e.target.value);
     };
    React.useEffect(() => {
       let results = people.filter(person =>
         person.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);
   
     return (
       <div className="App">
         <input
           type="text"
           placeholder="Search"
           value={searchTerm}
           onChange={handleChange}
         />
         <ul>
            {searchResults.map((item:any) => (
             <li key={item}>{item}</li>
           ))}
         </ul>
       </div>
     );
}

export default Home;