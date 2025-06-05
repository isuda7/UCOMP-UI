'use client';

import React from 'react';

const StepPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Step</h1>
					</div>
                    {/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">style1</h2>
						</div>
						<div className="g-section-body">
							<div className="step">
								<ol className="step-list">
									<li className="step-item is_completed">Step1</li>
									<li className="step-item is_current" aria-current="step">Step2</li>
									<li className="step-item">Step3</li>
								</ol>
							</div>
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>
        // Container
    );
};

export default StepPage;