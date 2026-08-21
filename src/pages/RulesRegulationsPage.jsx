import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import college from '../theme';
import SiteHeader from '../components/SiteHeader';
import PageHero from '../components/PageHero';
import AdmissionsCTA from '../components/AdmissionsCTA';
import Footer from '../components/Footer';

const primary = college.primaryColor;
const accent = college.greenAccent;

const rules = [
  'All students should attend the class work regularly on time.',
  'Students should board the buses that were meant for them as per their timings. They should avoid using the buses meant for other students.',
  'Using of cell phones by the students within the campus is strictly prohibited.',
  'The campus is under CCTV surveillance.',
  'Ragging is strictly prohibited as per the UGC Regulation on "Curbing the menace of ragging" in higher educational institutions, 2009.',
  'All the students should behave politely with the security, teaching and non-teaching staff members.',
  'A proper dress code must be maintained that satisfies the university level education. Wearing torn jeans, collarless \'T\' shirts must be avoided.',
  'Female students are advised to tie their hair properly in order to avoid discomfort during the practical session. Shoes are advisable.',
  'The Students are advised to take permission from the higher authorities in case of leaving the premises during the working hours.',
  'The students are solely responsible for their belongings either in the lecture hall / practical class / campus.',
  'The students are instructed to take care of the infrastructure either in class rooms / laboratory.',
  'Unnecessary loitering in the corridors must be avoided.',
  'Sitting on the staircase steps must be avoided.',
  'All the first year students must compulsorily reach the college by the college bus only.',
  'Prior intimation to the class incharge is needed in case of absence to the classwork.',
  'In case of health issues medical certificate has to be submitted to the class incharge immediately.',
  'In case of absenteeism to the examinations prior permission to be taken from Principal by the student as well as the parent. This is mandatory.',
  'Every student should maintain a minimum attendance of 85% in both theory and practical.',
];

export default function RulesRegulationsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader college={college} />
      <PageHero
        college={college}
        title="Rules and Regulations"
        subtitle="Guidelines for a safe, disciplined, and productive campus environment"
        breadcrumb={['Rules and Regulations']}
        bgImage={college.heroBgImage}
      />
      <main className="flex-1 section-pad">
        <div className="max-w-[900px] mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: `${primary}05`, border: `1px solid ${primary}14` }}
          >
            <h2
              className="font-display font-bold text-type-h5 mb-6"
              style={{ color: primary }}
            >
              Student Rules and Regulations
            </h2>
            <ol className="space-y-4">
              {rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-type-ui-sm text-white mt-0.5"
                    style={{ backgroundColor: primary }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-body text-type-body text-[#474747] leading-relaxed">
                    {rule}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <AdmissionsCTA college={college} />
      <Footer college={college} />
    </div>
  );
}
