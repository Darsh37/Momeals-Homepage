import React from 'react'

function UserResponsibilities() {
  return (
    <div>
      <h3 className='condition-detailsh3'>User Responsibilities</h3>
      <ul style={{listStyle:"lower-alpha"}} className='p-2'>
        <li >
          <p className="condition-detailsp">
            By using Momeals, you acknowledge that the information provided by
            users regarding food donations, personal details, and pickup
            requests is accurate, complete, and truthful.
          </p>
        </li>
        <li>
          <p className="condition-detailsp">
            Users are responsible for ensuring that donated food meets safety
            and hygiene standards, and they release Momeals from any liability
            arising from the use or consumption of donated food.
          </p>
        </li>
        <li>
          <p className="condition-detailsp">
            Users must comply with all applicable laws and regulations regarding
            food safety, handling, and transportation while participating in our
            services.
          </p>
        </li>
        <li>
          <p className="condition-detailsp">
            Users agree not to engage in any malicious or harmful activities
            that may disrupt the functioning or security of Momeals or
            compromise the privacy of other users.
          </p>
        </li>
      </ul>
      
    </div>
  )
}

export default UserResponsibilities
