import React from "react";

const SalesStatistic = () => {
  return (
    <div className="col-xl-6 col-lg-12" style={{width:'100%'}}>
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">User statistics</h5>
          <iframe
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            width="640"
            height="480"
            src="https://charts.mongodb.com/charts-nchshop-urvvd/embed/charts?id=63adc608-6009-4196-8efd-228b15447cea&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
           
        </article>
      </div>
    </div>
  );
};

export default SalesStatistic;
