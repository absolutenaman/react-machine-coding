import "./App.css"

const GridLightBoxCells = () => {
    let data = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
    return (
        <div className="wrapper">
            {data.map((item, index1) => {
                return <div className="row">
                    {item.map((element, index2) => {
                            return <div className="boxes"/>
                        }
                    )
                    }
                </div>
            })}
        </div>
    )

}
export default GridLightBoxCells;
