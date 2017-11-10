import Board from "../view/Board";
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
             tilesData : [
                {
                  img: 'images/grid-list/00-52-29-429_640.jpg',
                  title: 'Breakfast',
                  author: 'jill111',
                  featured: true,
                },
                {
                  img: 'images/grid-list/burger-827309_640.jpg',
                  title: 'Tasty burger',
                  author: 'pashminu',
                },
                {
                  img: 'images/grid-list/camera-813814_640.jpg',
                  title: 'Camera',
                  author: 'Danson67',
                },
                {
                  img: 'images/grid-list/morning-819362_640.jpg',
                  title: 'Morning',
                  author: 'fancycrave1',
                  featured: true,
                },
                {
                  img: 'images/grid-list/hats-829509_640.jpg',
                  title: 'Hats',
                  author: 'Hans',
                },
                {
                  img: 'images/grid-list/honey-823614_640.jpg',
                  title: 'Honey',
                  author: 'fancycravel',
                },
                {
                  img: 'images/grid-list/vegetables-790022_640.jpg',
                  title: 'Vegetables',
                  author: 'jill111',
                },
                {
                  img: 'images/grid-list/water-plant-821293_640.jpg',
                  title: 'Water plant',
                  author: 'BkrmadtyaKarki',
                },
              ]              
        };
    }    

    render() {
        return (
            <div>                
                <GridList
                cols={3}
                cellHeight={200}
                padding={12}                
                >             
                    {this.state.tilesData.map((tile) => (
                        <GridTile
                        key={tile.img}
                        title={tile.title}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        actionPosition="right"
                        titlePosition="bottom"
                        titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        cols={tile.featured ? 3 : 1}
                        rows={tile.featured ? 2 : 1}
                        > 
                        <img src="img/a.png"></img>
                        </GridTile>
                    ))}
                </GridList>   
            </div>
        );
    }
}

export default Home;

