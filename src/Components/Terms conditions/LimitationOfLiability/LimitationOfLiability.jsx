import React from "react";

function LimitationOfLiability() {
  return (
    <div>
      <h3 className="condition-detailsh3">Limitation Of Liability</h3>
      <ul  className='p-2' style={{ listStyle: "lower-alpha" }}>
        <li>
          <p className="condition-detailsp">
            Momeals strives to ensure the accuracy and reliability of the
            information provided on our web-app; however, we make no guarantees
            regarding the completeness, timeliness, or accuracy of such
            information.
          </p>
        </li>
        <li>
          <p className="condition-detailsp">
            Momeals shall not be held liable for any direct, indirect,
            incidental, consequential, or punitive damages arising from the use
            of our platform, including but not limited to foodborne illnesses,
            accidents, or losses resulting from the donation or consumption of
            food.
          </p>
        </li>
        <li>
          <p className="condition-detailsp">
            Momeals does not assume responsibility for any actions or behavior
            of users, including any disputes or conflicts that may arise between
            users or between users and third parties.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default LimitationOfLiability;
