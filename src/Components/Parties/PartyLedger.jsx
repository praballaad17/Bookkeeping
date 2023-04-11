import React from "react";

export default function PartyLedger() {
    return (
        <div className="party-ledger">
            <div className="upper-container">
                <div className="input-buttons">
                    <select className="date-filter">
                        <option value="NA">All time</option>
                    </select>
                </div>
                <div className="print-buttons">
                    <div className="print-section">Download</div>
                </div>
                <div className="print-buttons">
                    <div className="print-section">Print</div>
                </div>
                <div className="print-buttons">
                    <div className="print-section">Send SMS</div>
                </div>
            </div>

            <div className="ledger-list">
                <div class="ledger-details">
                    <div class="company-header">
                        <div class="column-1">
                            <div class="company-name"> NA </div>
                            <div class="mobile"> Phone no: &nbsp; &nbsp; 7206150211 </div>
                        </div>
                        <div class="ledger-title"> Party Ledger </div>
                    </div>
                    <div class="party-details">
                        <div class="column-1">
                            <div class="to">To,</div>
                            <div class="party-name text-ellipsis">
                                {" "}
                                Cash Sale <br />{" "}
                            </div>
                            <div class="mobile">7206150211</div>
                        </div>
                        <div class="column-2">
                            <div class="date"> 2022-07-13 - 2022-07-13 </div>
                            <div class="text"> Total Payable </div>
                            <div class="value"> 0 </div>
                        </div>
                    </div>
                    <div class="ledger-txns">
                        <table class="ledger-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Voucher</th>
                                    <th>Sr No</th>
                                    <th>Credit</th>
                                    <th>Debit</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td> Opening Balance </td>
                                    <td></td>
                                    <td> - </td>
                                    <td> _ </td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td> Closing Balance </td>
                                    <td></td>
                                    <td> - </td>
                                    <td> _ </td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
