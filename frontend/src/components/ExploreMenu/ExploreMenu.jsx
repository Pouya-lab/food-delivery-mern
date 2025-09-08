import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu( { category , setCategory } ) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore The Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempora quisquam enim id atque placeat sed consequuntur ullam autem, illum totam neque at nesciunt deserunt tenetur eaque laboriosam consequatur quia nisi? Saepe iste labore ullam!</p>
        {/* section bellow maps throw a pre-set items and images and goes through this and shows the result  */}
        <div className="explore-menu-list">
            {menu_list.map(( item , index )=>{
                return (
                    <div
                    key={ index }
                        onClick={ () => setCategory( prev => prev === item.menu_name ? "All" : item.menu_name ) }
                    className="explore-menu-list-item">
                        <img className= { category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu