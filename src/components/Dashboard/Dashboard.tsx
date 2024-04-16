import { Card } from "primereact/card";
import IssueStatusChart from "../IssueStatusChart/IssueStatusChart";

function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <Card title="Open">
                <p className="m-0">34</p>
              </Card>
            </div>
            <div className="col-md-4">
              <Card title="In-Progress">
                <p className="m-0">12</p>
              </Card>
            </div>
            <div className="col-md-4">
              <Card title="Closed">
                <p className="m-0">2</p>
              </Card>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12">
              <IssueStatusChart />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <Card title="Latest Issues">
                <p>Broken Checkout Button</p>
                <span className="badge text-bg-primary">In Progress</span>
                <hr />
                <p>Payment Refund Request</p>
                <span className="badge text-bg-danger">Open</span>
                <hr />
                <p>Missing User Profile Data</p>
                <span className="badge text-bg-success">Closed</span>
                <hr />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
