// import { Component } from "react";
import './cardlist.styles.css'
import Card from "../card/card.component";

const CardList = ({ filteredMonsters })=>(
      <>
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          return (
           <Card monster= {monster}/>
          )
        })}
        </div>
      </>
)

// class CardList extends Component {
//   render() {
//     const { filteredMonsters } = this.props
//     return (
//       <>
//       <div className="card-list">
//         {filteredMonsters.map((monster) => {
//           return (
//            <Card monster= {monster}/>
//           )
//         })}
//         </div>
//       </>
//     )
//   }
// }

export default CardList;