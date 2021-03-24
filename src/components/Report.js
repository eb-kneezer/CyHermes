import React from 'react'

export default function Report() {
  return (
    <div className="reports">
            <div className="details">
              <div className="regulator">
                <p className="report-headings">Regulator</p>
                <p>Financial Reporting Council of Nigeria (FRCN)</p>
              </div>
              <div className="template">
                <p className="report-headings">Template</p>
                <p>Nigeria Code of Corporate Governance (NCCG)</p>
              </div>
              <div className="submitted">
                <p className="report-headings">Date submitted</p>
                <p>20th October, 2020</p>
              </div>
              <div className="report-status">
                <span className="accepted">ACCEPTED</span>
                <p>Accepted 2 days ago</p>
              </div>
            </div>
            <div className="view-details">
              <p>View Details</p>
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
  )
}
