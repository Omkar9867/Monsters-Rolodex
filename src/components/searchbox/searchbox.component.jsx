// import { Component } from "react";
import './search.styles.css'

const SearchBox = ({searchChange, placeholder, className}) => (
    <>
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={searchChange} />
    </>
)

// class SearchBox extends Component {
//     render() {
//         const {searchChange, placeholder, className} = this.props
//         return (
//             <>
//                 <input
//                     className={`search-box ${className}`}
//                     type='search'
//                     placeholder={placeholder}
//                     onChange={searchChange} />
//             </>
//         )
//     }
// }

export default SearchBox