import { VictoryPie, VictoryLabel, VictoryAnimation } from 'victory';
import CardBoxOptions from './CardBoxOptions';


// eslint-disable-next-line
class CardBox extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 25, data: this.getData(0),
    };
  }
  componentDidMount() {
    const percent = 25;
    this.setStateInterval = window.setInterval(() => {
      // percent += 25;
      // percent = (percent > 100) ? 0 : percent;
      this.setState({
        percent, data: this.getData(percent),
      });
    }, 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }
  // eslint-disable-next-line
  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }
  render() {
    return (
      <div className="card-box">
        <CardBoxOptions />
        <h4 className="header-title m-t-0 m-b-30">Total de Tags</h4>
        <div className="widget-chart-1">
          <div className="widget-chart-box-1" style={{ display: 'inline', width: '80px', height: '80px' }}>
            <svg viewBox="0 0 400 400" width="100%" height="100%">
              <VictoryPie
                standalone={false}
                animate={{ duration: 1000 }}
                width={400}
                height={400}
                data={this.state.data}
                innerRadius={140}
                cornerRadius={0}
                labels={() => null}
                style={{
                  data: {
                    fill: (d) => {
                      const color = 'rgb(240, 80, 80)';
                      return d.x === 1 ? color : 'rgb(250, 184, 185)';
                    },
                  },
                }}
              />
              <VictoryAnimation duration={1000} data={this.state}>
                {newProps => (
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200}
                    y={200}
                    text={`${Math.round(newProps.percent)}`}
                    style={{
                      fontSize: 76,
                      fill: 'rgb(250, 184, 185)',
                      fontFamily: 'Arial',
                      fontWeight: 'bold',
                    }}
                  />
                )}
              </VictoryAnimation>
            </svg>
          </div>
          <div className="widget-detail-1">
            <h2 className="p-t-10 m-b-0"> 256 </h2>
            <p className="text-muted">Today</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBox;
