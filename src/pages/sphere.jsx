import './sphere.css';
import React from 'react';
function Sphere() {
  const generateVertices = () => {
    const g = 0.5 * (1 + Math.sqrt(5));
    let v = [1, +g.toFixed(3), 0];
    let p = [];
    const r = Math.hypot(1, g);
    
    for (let k = 0; k < 3; k++) {
      v.unshift(v.pop());
      for (let j = 0; j < 4; j++) {
        let m = [Math.pow(-1, ~~(0.5 * j)), Math.pow(-1, j % 2)];
        m.splice(k, 0, 0);
        let c = { v: v.map((_, i) => _ * m[i]), n: [] };
        p.forEach(q => {
          if (Math.hypot(...c.v.map((t, i) => t - q.v[i])) < 2.1) {
            c.n.push(q);
          }
        });
        p.push(c);
      }
    }
    
    let m = [];
    p.forEach(c => {
      m.push(c.v);
      c.n.forEach((k, i) => {
        let q = c.v.map((_, j) => 0.5 * (_ + k.v[j]));
        let f = r / Math.hypot(...q);
        q = q.map(k => f * k);
        m.push(q);
      });
    });
    
    return m;
  };

  const vertices = generateVertices();

  return (
    <div style={{
      width: '100%',      // Use parent container size
      height: '100%',
      perspective: '25em',
      display: 'grid',
      placeItems: 'center'
    }}>
      <div className="a3d">
        {vertices.map((vertex, index) => (
          <div
            key={index}
            className="vx"
            style={{
              '--v0': vertex[0].toFixed(3),
              '--v1': vertex[1].toFixed(3),
              '--v2': vertex[2].toFixed(3)
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Sphere;