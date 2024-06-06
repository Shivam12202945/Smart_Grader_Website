import React from 'react';
import 'tailwindcss/tailwind.css';

const Foot = () => {
  return (
    <div className="absolute bottom-0 w-full z-[11111] top-[35px]">
      <div id="waterdrop" className="h-[150px]"></div>
      <footer>
        <div className="bg-[#303030] bg-cover bg-center py-[30px] text-[#b0b0b0]">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="lg:w-1/4 w-full md:w-full sm:w-full mb-8">
                <div className="widget">
                  <h5 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:w-[50px] after:bg-white after:opacity-20 after:h-[1px] after:absolute after:bottom-0 after:left-0">Address</h5>
                  <div className="gem-contacts">
                    <div className="mb-4">
                      <strong>Corporate Office :</strong><br />
                      Doon House, B-275(A), First floor Sector-57, Shushant Lok 3 Near Hong Kong Bazzar, Gurugram Pin 122001, Haryana.
                    </div>
                    <div className="mb-4">
                      <i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="tel:+919122588799">+91-9122588799</a>
                    </div>
                    <div className="mb-4">
                      <strong>Reg. Office :</strong><br />
                      Doon House, D2/3, 4th Floor, Chandra Tower, IDBI Bank Building Dimna Road, Mango, Jamshedpur-831012, Jharkhand.
                    </div>
                    <div>
                      <i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="tel:+919122588799">+91-9122588799</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full flex flex-wrap mb-8">
                <div className="w-1/2 mb-8">
                  <div className="widget">
                    <h5 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:w-[50px] after:bg-white after:opacity-20 after:h-[1px] after:absolute after:bottom-0 after:left-0">Recent News</h5>
                    <ul className="list-none">
                      <li className="border-b border-[#393d50] py-2">
                        <div>
                          <a href="#" className="text-[#99a9b5]">Want to start Your Own Play School.</a>
                          <div className="text-[#00bcd4] text-sm">Call +91-9122588799</div>
                        </div>
                      </li>
                      <li className="border-b border-[#393d50] py-2">
                        <div>
                          <a href="#" className="text-[#99a9b5]">Now we are in Faridabad, Now we are in DaudNagar.</a>
                          <div className="text-[#00bcd4] text-sm">Call +91-9122588799, +91-9122588799</div>
                        </div>
                      </li>
                      <li className="border-b border-[#393d50] py-2">
                        <div>
                          <a href="#" className="text-[#99a9b5]">Now we are in Ranchi, Admission open</a>
                          <div className="text-[#00bcd4] text-sm">Call +91-9122588799, +91-9122588799</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/2 mb-8">
                  <div className="widget">
                    <h5 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:w-[50px] after:bg-white after:opacity-20 after:h-[1px] after:absolute after:bottom-0 after:left-0">Email Us</h5>
                    <div>
                      <form className="wpcf7-form">
                        <div className="contact-form-footer">
                          <p>
                            <input type="text" name="your-first-name" className="w-full p-2 bg-[#1c1f2f] border border-[#2e344d] rounded shadow-inner" placeholder="Your name" />
                          </p>
                          <p>
                            <input type="email" name="your-email_1" className="w-full p-2 bg-[#1c1f2f] border border-[#2e344d] rounded shadow-inner" placeholder="Your email" />
                          </p>
                          <p>
                            <textarea name="your-message" className="w-full p-2 bg-[#1c1f2f] border border-[#2e344d] rounded shadow-inner h-40" placeholder="Your message"></textarea>
                          </p>
                          <div>
                            <input type="submit" value="Send" className="w-full p-3 bg-[#1c1f2f] border border-[#2e344d] rounded shadow-inner hover:bg-transparent hover:shadow-lg hover:border-white hover:text-white transition-all" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/3 w-full mb-8">
                <div className="widget">
                  <h5 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:w-[50px] after:bg-white after:opacity-20 after:h-[1px] after:absolute after:bottom-0 after:left-0">Our Gallery</h5>
                  <ul className="flex flex-wrap list-none">
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                    <li className="w-1/3 p-1">
                      <a href="#"><img src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80" alt="Gallery" className="w-full" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <span>© 2019 Doon International. Designed by <a href="https://www.imployx.com" target="_blank" className="text-[#cfa25c]">Imployx</a>. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;
