import React, { useState, useEffect } from 'react';
import '../../static/Certificate.css'
import data from '../data/data'
import ScrollAnimation from 'react-animate-on-scroll'
import { getActiveData } from './Utils'


function Certificate() {
  const [category, setCategory] = useState("all")
  const certificateFiltersData = data['certificate_filters']
  const orgFiltersData = data['org_filters']
  const certificatesData = data['certificates']
  const activeCertificates = getActiveData(certificatesData, category);

  useEffect(() => { }, [category]);

  function handleClick(event) {
    const value = event.currentTarget.dataset.filter
    setCategory(value)
  }

  const certificateFilters = certificateFiltersData.map((data) => (
    <ScrollAnimation key={data} animateIn="fadeIn" animateOnce={true}>
      <button
        className="certificate-filter btns-filter"
        data-filter={data}
        onClick={(event) => handleClick(event)}
      >
        {data}
      </button>
    </ScrollAnimation>
  ));

  const orgFilters = orgFiltersData.map((data) => (
    <ScrollAnimation key={data} animateIn="fadeIn" animateOnce={true}>
      <button
        className={`certificate-filter btns-filter ${data}`}
        data-filter={data}
        onClick={(event) => handleClick(event)}
      >
        {data}
      </button>
    </ScrollAnimation>
  ));

  const certificates = activeCertificates.map((data) => (
    <ScrollAnimation key={data['id']} animateIn="fadeIn" animateOnce={true}>
      <a id={`certificate${data['id']}`} className={`certificate ${data['org']}`} href={data['url']} data-category={`[${data['category']}]`}>{data['caption']}</a>
    </ScrollAnimation>
  ))

  return (
    <div id="certificates">
      <h2 className='sub-title'>CERTIFICATES</h2>
      <div className="certificate-btns btns-section">
        {certificateFilters}
      </div>
      <div className="org-btns btns-section">
        {orgFilters}
      </div>
      <div className="certificate-section">
        {certificates}
      </div>
    </div>
  );
}

export default Certificate;