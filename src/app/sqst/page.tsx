import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Symposium on Quantum Science and Technology (SQST) | COMSNETS 2027',
  description: 'International Year of Quantum Science & Technology (IYQ) 2025 - COMSNETS 2027 Symposium',
};

export default function SQST() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 mb-8 shadow-sm">
              <h2 className="text-slate-800 font-bold text-2xl sm:text-3xl mb-3 mt-0">Symposium on Quantum Science and Technology (SQST)</h2>
              <div className="text-blue-600 text-lg font-medium mb-6">Co-located with COMSNETS 2027 &bull; 9<sup>th</sup> &amp; 10<sup>th</sup> January 2027</div>

              <div className="bg-gray-50 border-l-4 border-blue-600 p-4 my-5 italic text-gray-600">
                <strong>International Year of Quantum Science &amp; Technology (IYQ) 2025</strong> &mdash;
                underscoring the growing importance of quantum technologies as transformative emerging fields.
              </div>

              <div className="text-gray-700 leading-relaxed text-base text-justify space-y-4">
                <p>
                  After a highly successful launch of QCom(P) and WQT, the two international quantum workshops at
                  COMSNETS 2024 and 2025, respectively, and an international symposium celebrating the quantum
                  century (SCQC) at AI-ML Systems&apos; 25 conference, we are now gearing up to create a bigger, better,
                  and broader impact by organising an international 2-day symposium under the COMSNETS association.
                </p>
                <p>
                  Hence, going forward, we have expanded our organizing team to present this special event, which
                  will be co-located with COMSNETS 2027 and will encompass all four major drivers of quantum
                  technology as of today:
                </p>
                <ul className="list-none p-0 my-4 flex flex-wrap gap-3">
                  <li className="bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-600 flex items-center gap-2">
                    <i className="fa fa-rss"></i> Sensing
                  </li>
                  <li className="bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-600 flex items-center gap-2">
                    <i className="fa fa-exchange"></i> Communications
                  </li>
                  <li className="bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-600 flex items-center gap-2">
                    <i className="fa fa-microchip"></i> Computing
                  </li>
                  <li className="bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-600 flex items-center gap-2">
                    <i className="fa fa-cubes"></i> Materials
                  </li>
                </ul>
                <p className="mt-4">— besides covering foundational and fundamental research directions.</p>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-5 text-green-800 leading-relaxed">
                  <strong className="text-green-700 font-bold">National Quantum Mission (NQM):</strong> Given the developments happening in India through
                  the National Quantum Mission, this symposium aims to also present the vibrant atmosphere of the
                  Indian Quantum Ecosystem to our audience, including the recent launch of NQM-supported Hubs and Startups.
                </div>

                <p>
                  The goal of this symposium is to bring together quantum researchers, scientists, engineers,
                  entrepreneurs, developers, students, practitioners, educators, and programmers working in this field.
                  In this context, the symposium also intends to include the topic of understanding what it takes to
                  bring more of the technology from an academic setting to real-world applications based on the
                  industry requirements and technology development roadmap.
                </p>
              </div>

              {/* Co-Chairs */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <h3 className="text-slate-800 font-semibold text-xl sm:text-2xl mb-4 mt-0">Co-Chairs</h3>
                <ul className="list-none p-0 m-0 border border-gray-100 rounded-md">
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Sourav Chatterjee</span> <span className="text-gray-500 text-[15px]">&mdash; TCS Research, India</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Raktim Halder</span> <span className="text-gray-500 text-[15px]">&mdash; IIT Bhubaneswar, India</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Ritajit Majumdar</span> <span className="text-gray-500 text-[15px]">&mdash; IBM Research, India</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Shashank Gupta</span> <span className="text-gray-500 text-[15px]">&mdash; IIT Indore, India</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Aritra Sarkar</span> <span className="text-gray-500 text-[15px]">&mdash; Fujitsu Research, India</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Rahul Sawant</span> <span className="text-gray-500 text-[15px]">&mdash; IIT Madras, India</span>
                  </li>
                </ul>
              </div>

              {/* Local Organizing Committee */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <h3 className="text-slate-800 font-semibold text-xl sm:text-2xl mb-4 mt-0">Local Organizing Committee</h3>
                <ul className="list-none p-0 m-0 border border-gray-100 rounded-md">
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Prasant Misra</span> <span className="text-gray-500 text-[15px]">&mdash; TCS Research, India</span>
                  </li>
                </ul>
              </div>

              {/* Steering / Advisory Committee */}
              <div className="mt-10 border-t border-gray-200 pt-6">
                <h3 className="text-slate-800 font-semibold text-xl sm:text-2xl mb-1 mt-0">Steering / Advisory Committee</h3>
                <p className="text-sm text-gray-500 mb-4 italic">Previously the WQT co-chairs</p>
                <ul className="list-none p-0 m-0 border border-gray-100 rounded-md">
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Kishore Bharti</span> <span className="text-gray-500 text-[15px]">&mdash; University of Maryland, USA</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">M Girish Chandra</span> <span className="text-gray-500 text-[15px]">&mdash; TCS Research, India</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Nitin Jain</span> <span className="text-gray-500 text-[15px]">&mdash; Technical University of Denmark, Denmark</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Chiranjib Mukhopadhyay</span> <span className="text-gray-500 text-[15px]">&mdash; University of Electronic Sciences and Technology of China, China</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Rajiv Krishnakumar</span> <span className="text-gray-500 text-[15px]">&mdash; QuantumBasel, Switzerland</span>
                  </li>
                  <li className="px-4 py-3 border-b border-gray-100 text-base text-gray-700 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 hover:bg-gray-50 last:border-b-0">
                    <span className="font-bold text-slate-800 text-base">Kaushik Seshadreesan</span> <span className="text-gray-500 text-[15px]">&mdash; University of Pittsburgh, USA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
