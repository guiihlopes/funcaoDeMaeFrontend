import CardBoxOptions from './CardBoxOptions';

// eslint-disable-next-line
class CardBox extends React.Component {
  render() {
    return (
      <div className="card-box">
        <CardBoxOptions />
        <h4 className="header-title m-t-0 m-b-30">Total de Tags</h4>
        <div className="widget-chart-1">
          <div className="widget-chart-box-1">
            <input
              data-plugin="knob"
              data-width={80}
              data-height={80}
              data-fgcolor="#f05050 "
              data-bgcolor="#F9B9B9"
              defaultValue={58}
              data-skin="tron"
              data-angleoffset={180}
              data-readonly="true"
              data-thickness=".15"
            />
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
