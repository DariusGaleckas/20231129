import { useState } from 'react';

export default function Create({ setCreate }) {

    const [color, setColor] = useState('#ffffff');
    const [size, setSize] = useState(20);
    const add = _ => {
        setCreate({ color, size}
            );
            setColor('#ffffff');
            setSize(20);
    }




  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">Create new Color</h5>

        <div className="mb-3">
          <label className="form-label">Color</label>
          <input type="color" value={color} onChange={e => setColor(e.target.value)} className="form-control form-control-color" />
        </div>

        <div className="mb-3">
          <label className="form-label">Size <b>{size}</b></label>
          <input type="range" min={10} max={40} step={1} value={size} onChange={e => setSize(e.target.value)} className="form-range" />
        </div>

        <button type="button" onClick={add} className="btn btn-outline-primary">Add color</button>
      </div>
    </div>
  );
}
