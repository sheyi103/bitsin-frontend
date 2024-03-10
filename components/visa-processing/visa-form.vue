<template>
  <div>
    <div class="font">
      <!-- title head -->
      <div class="gradient-header text-end px-4 w-70 m-auto my-5 py-3">
        <h5 class="blue fw-bold">Start your visa processing now with us</h5>
        <!-- <fa icon="lock" /> -->
      </div>
      <!-- form container-->
      <div class="shadow-lg w-90 m-auto rounded-2 p-4">
        <!-- follow the following details -->
        <div>
          <h5 class="fontbold blue">Please provide the following details:</h5>
        </div>
        <div class="py-3">
          <h5 class="fw-bold">How can we help?</h5>
          <span class="fs-200">We are here to answer any questions you may have.</span>
        </div>
        <section>
          <o-steps v-model="currentStep" stepContentClass="o-demo-form">
            <o-step-item icon="file-lines" label="Profile">
              <!-- <h2 class="o-demo__title">Fill your profile information</h2> -->
              <h3>Basic details</h3>

              <div class="row">
                <o-field
                  class="col-md-4"
                  :message="messages.firstName"
                  :variant="messages.firstName ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="First Name"
                    v-model="form.firstName"
                    expanded
                  />
                </o-field>

                <o-field
                  class="col-md-4"
                  :message="messages.lastName"
                  :variant="messages.lastName ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Last Name"
                    v-model="form.lastName"
                    expanded
                  />
                </o-field>

                <o-field
                  class="col-md-4"
                  :message="messages.otherName"
                  :variant="messages.otherName ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Other Name"
                    v-model="form.otherName"
                    expanded
                  />
                </o-field>
              </div>

              <div class="row">
                <o-field
                  class="col-md-4"
                  :message="messages.maidenName"
                  :variant="messages.maidenName ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Maiden Name"
                    v-model="form.maidenName"
                    expanded
                  />
                </o-field>

                <o-field
                  class="col-md-4"
                  :message="messages.previousName"
                  :variant="messages.previousName ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Previous Name"
                    v-model="form.previousName"
                    expanded
                  />
                </o-field>

                <o-field
                  class="col-md-4"
                  :message="messages.gender"
                  :variant="messages.gender ? 'danger' : ''"
                >
                  <select
                    v-model="form.gender"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </o-field>
              </div>

              <div class="row">
                <o-field
                  class="col-md-4"
                  :message="messages.mstatus"
                  :variant="messages.mstatus ? 'danger' : ''"
                >
                  <select
                    v-model="form.mstatus"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                </o-field>

                <o-field
                  class="col-md-4"
                  :message="messages.noc"
                  :variant="messages.noc ? 'danger' : ''"
                >
                  <o-input
                    id=""
                    type="text"
                    placeholder="No. of Children"
                    v-model="form.noc"
                    expanded
                  />
                </o-field>
                <o-field
                  class="col-md-4"
                  :message="messages.dob"
                  :variant="messages.dob ? 'danger' : ''"
                >
                  <o-input id="name" type="date" v-model="form.dob" expanded />
                </o-field>
              </div>

              <div class="row mb-3">
                <o-field
                  class="col-md-4"
                  :message="messages.nos"
                  :variant="messages.nos ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="No. of Siblings"
                    v-model="form.nos"
                    expanded
                  />
                </o-field>

                <o-field
                  class="col-md-4"
                  :message="messages.occupation"
                  :variant="messages.occupation ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Occupation"
                    v-model="form.occupation"
                    expanded
                  />
                </o-field>

                <o-field
                  class="col-md-4"
                  :message="messages.nationality"
                  :variant="messages.nationality ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Nationality"
                    v-model="form.nationality"
                    expanded
                  />
                </o-field>
              </div>

              <h3>Contact details</h3>
              <div class="row">
                <p>Contact Address</p>
                <o-field class="col-md-12">
                  <o-input name="street" placeholder="Street" expanded></o-input>
                </o-field>
                <o-field class="col-md-4">
                  <o-input name="zip" placeholder="Zip Code" expanded></o-input>
                </o-field>
                <o-field class="col-md-4">
                  <o-input name="country" placeholder="City" expanded></o-input>
                </o-field>

                <o-field class="col-md-4 mb-3">
                  <o-input name="country" placeholder="Country" expanded></o-input>
                </o-field>

                <p>Mailing Address</p>
                <o-field class="col-md-12">
                  <o-input name="street" placeholder="Street" expanded></o-input>
                </o-field>
                <o-field class="col-md-4">
                  <o-input name="zip" placeholder="Zip Code" expanded></o-input>
                </o-field>
                <o-field class="col-md-4">
                  <o-input name="city" placeholder="City" expanded></o-input>
                </o-field>
                <o-field class="col-md-4">
                  <o-input name="country" placeholder="Country" expanded></o-input>
                </o-field>
              </div>
              <o-field
                label="I need visitors to consent to the following agreements"
                variant="danger"
                :message="messages.privacyTerms"
              >
                <div class="o-demo-form__field-2-col">
                  <o-checkbox v-model="privacy">Privacy Policy</o-checkbox>
                  <o-checkbox v-model="terms">Terms and Conditions</o-checkbox>
                </div>
              </o-field>
            </o-step-item>

            <o-step-item icon="user-plus" label="Account">
              <h1 class="title has-text-centered"></h1>

              <div class="row">
                <div class="col-md-3"></div>
                <o-field
                  class="col-md-6"
                  label="Username"
                  label-for="username"
                  :message="messages.username"
                  :variant="messages.username ? 'danger' : ''"
                >
                  <o-input
                    v-model="form.username"
                    id="username"
                    type="text"
                    placeholder="Username"
                    expanded
                  />
                </o-field>
                <div class="col-md-3"></div>
              </div>
              <div class="row">
                <div class="col-md-3"></div>
                <o-field
                  class="col-md-6"
                  label="Password"
                  label-for="password"
                  :variant="messages.password ? 'danger' : ''"
                  :message="messages.password"
                >
                  <o-input
                    v-model="form.password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    expanded
                  />
                </o-field>
                <div class="col-md-3"></div>
              </div>
              <div class="row">
                <div class="col-md-3"></div>
                <o-field class="col-md-6">
                  <o-input
                    v-model="form.passwordCheck"
                    id="repeat-password"
                    type="password"
                    placeholder="Repeat assword"
                    expanded
                  />
                </o-field>
                <div class="col-md-3"></div>
              </div>
            </o-step-item>

            <o-step-item icon="user-graduate" label="Education/Employment">
              <!-- <h1 class="title has-text-centered">Create an account</h1> -->
              <h3 class="mt-3">Educational details</h3>

              <button
                @click="addEducationRow"
                style="background-color: #283673"
                class="btn text-white"
              >
                <o-icon pack="fas" icon="plus"> </o-icon>
              </button>
              <button @click="deleteEducationRow" class="btn text-white btn-danger">
                <o-icon pack="fas" icon="minus"> </o-icon>
              </button>
              <div class="row" v-for="(education, index) in form.education" :key="index">
                <p>Education</p>
                <o-field class="col-md-4">
                  <o-input
                    v-model="form.education.cos"
                    type="text"
                    placeholder="Course of Study"
                  />
                </o-field>
                <o-field class="col-md-4">
                  <o-input
                    v-model="form.education.noi"
                    type="text"
                    placeholder="Name of institution"
                  />
                </o-field>

                <o-field class="col-md-4">
                  <o-input
                    v-model="form.education.pos"
                    type="text"
                    placeholder="Period of Study (from - To)"
                  />
                </o-field>
              </div>

              <h3 class="mt-3">Employment History</h3>

              <button
                @click="addEmploymentRow"
                style="background-color: #283673"
                class="btn text-white"
              >
                <o-icon pack="fas" icon="plus"> </o-icon>
              </button>
              <button @click="deleteEmploymentRow" class="btn text-white btn-danger">
                <o-icon pack="fas" icon="minus"> </o-icon>
              </button>
              <div
                class="mb-3"
                v-for="(employment, index) in form.employment"
                :key="index"
              >
                <div class="row">
                  <p>Employment Details</p>
                  <o-field class="col-md-6">
                    <o-input
                      v-model="form.employment.name"
                      type="text"
                      placeholder="Name of Organization"
                    />
                  </o-field>
                  <o-field class="col-md-6">
                    <o-input
                      v-model="form.employment.role"
                      type="text"
                      placeholder="Job Role"
                    />
                  </o-field>
                </div>
                <div class="row">
                  <o-field class="col-md-6">
                    <o-input
                      v-model="form.employment.address"
                      type="text"
                      placeholder="Address"
                    />
                  </o-field>
                  <o-field class="col-md-6">
                    <o-input
                      v-model="form.employment.doe"
                      type="text"
                      placeholder="Duration(from - To)"
                    />
                  </o-field>
                </div>
              </div>
            </o-step-item>

            <o-step-item label="Questionnaire" icon="file-circle-question">
              <h3 class="mt-3">Travel Information</h3>
              <div class="row">
                <o-field
                  label="Country applying for?"
                  class="col-md-4"
                  :message="messages.toCountry"
                  :variant="messages.toCountry ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Intended destination"
                    v-model="form.toCountry"
                    expanded
                  />
                </o-field>

                <o-field
                  class="col-md-4"
                  label="Have you applied for VISA in the intended Country before?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="appliedBefore"
                      class="form-check-input"
                      type="radio"
                      name="appliedBefore"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="appliedBefore"
                      class="form-check-input"
                      type="radio"
                      name="appliedBefore"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>
                <o-field
                  class="col-md-4"
                  label="Have you had your passport stolen before?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="lostPassport"
                      class="form-check-input"
                      type="radio"
                      name="lostPassport"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="lostPassport"
                      class="form-check-input"
                      type="radio"
                      name="lostPassport"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>
              </div>
              <div class="row">
                <o-field
                  class="col-md-4"
                  label="Have you ever been Issued visa to your intended country of destination?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="issuedVisaBefore"
                      class="form-check-input"
                      type="radio"
                      name="issuedVisaBefore"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="issuedVisaBefore"
                      class="form-check-input"
                      type="radio"
                      name="issuedVisaBefore"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>

                <o-field
                  class="col-md-4"
                  label="Have you ever served in the Military?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="militaryService"
                      class="form-check-input"
                      type="radio"
                      name="militaryService"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="militaryService"
                      class="form-check-input"
                      type="radio"
                      name="militaryService"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>
                <o-field
                  class="col-md-4"
                  label="Are you involved in any charitable organization?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="isCharity"
                      class="form-check-input"
                      type="radio"
                      name="isCharity"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="isCharity"
                      class="form-check-input"
                      type="radio"
                      name="isCharity"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>
              </div>

              <div class="row">
                <o-field
                  class="col-md-4"
                  label="Do you have anyone you are travelling with you?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="travelAlone"
                      class="form-check-input"
                      type="radio"
                      name="travelAlone"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="travelAlone"
                      class="form-check-input"
                      type="radio"
                      name="travelAlone"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>
                <o-field
                  class="col-md-4"
                  label="Do you have enough for your tution fees and living expenses (Please note that you will be providingbank statement depending on the intended country)"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="appliedBefore"
                      class="form-check-input"
                      type="radio"
                      name="appliedBefore"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="appliedBefore"
                      class="form-check-input"
                      type="radio"
                      name="appliedBefore"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>

                <o-field
                  label="List the Laguages you speak"
                  class="col-md-4"
                  :message="messages.languages"
                  :variant="messages.languages ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="separate with comma"
                    v-model="form.languages"
                    expanded
                  />
                </o-field>
              </div>

              <div class="row">
                <o-field
                  class="col-md-4"
                  label="Have you ever been denied visa or refused entry to any Country in the past 10 years? if yes provide details"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="appliedBefore"
                      class="form-check-input"
                      type="radio"
                      name="appliedBefore"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="appliedBefore"
                      class="form-check-input"
                      type="radio"
                      name="appliedBefore"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>

                <o-field
                  label="Provide Details if yes"
                  class="col-md-4"
                  :message="messages.travelInfo"
                  :variant="messages.banDetails ? 'danger' : ''"
                >
                  <o-input
                    id="name"
                    type="text"
                    placeholder="Provide Details here"
                    v-model="form.banDetails"
                    expanded
                  />
                </o-field>
              </div>

              <div class="row">
                <o-field
                  class="col-md-4"
                  label="Have you travelled within the last 5 years?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="travelHistory"
                      class="form-check-input"
                      type="radio"
                      name="travelHistory"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="travelHistory"
                      class="form-check-input"
                      type="radio"
                      name="travelHistory"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>

                <div v-if="travelHistory == 'yes'" class="col-md-8">
                  <button
                    @click="addTravelHistory"
                    style="background-color: #283673"
                    class="btn text-white"
                  >
                    <o-icon pack="fas" icon="plus"> </o-icon>
                  </button>
                  <button @click="deleteTravelHistory" class="btn text-white btn-danger">
                    <o-icon pack="fas" icon="minus"> </o-icon>
                  </button>
                  <div
                    class="row"
                    v-for="(history, index) in form.travelHistoryForm"
                    :key="index"
                  >
                    <p>Travel History</p>
                    <o-field class="col-md-4">
                      <o-input
                        v-model="form.placesVisited"
                        type="text"
                        placeholder="Places Visited"
                      />
                    </o-field>
                    <o-field class="col-md-4">
                      <o-input v-model="form.purpose" type="text" placeholder="Purpose" />
                    </o-field>

                    <o-field class="col-md-4">
                      <o-input
                        v-model="form.dateVisited"
                        type="text"
                        placeholder="Date"
                      />
                    </o-field>
                  </div>
                </div>
              </div>

              <div class="mt-3 row">
                <o-field
                  class="col-md-4"
                  label="Do you have any immediate relatives in your destination intended country?"
                  variant="danger"
                >
                  <div class="form-check form-check-inline">
                    <input
                      v-model="relativesHistory"
                      class="form-check-input"
                      type="radio"
                      name="relativesHistory"
                      id="yes"
                      value="yes"
                    />
                    <label class="form-check-label" for="inlineRadio1">YES</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      v-model="relativesHistory"
                      class="form-check-input"
                      type="radio"
                      name="relativesHistory"
                      id="no"
                      value="no"
                    />
                    <label class="form-check-label" for="inlineRadio2">NO</label>
                  </div>
                </o-field>

                <div v-if="relativesHistory == 'yes'" class="col-md-8">
                  <button
                    @click="addrelatives"
                    style="background-color: #283673"
                    class="btn text-white"
                  >
                    <o-icon pack="fas" icon="plus"> </o-icon>
                  </button>
                  <button @click="deleterelatives" class="btn text-white btn-danger">
                    <o-icon pack="fas" icon="minus"> </o-icon>
                  </button>
                  <div
                    class="row"
                    v-for="(history, index) in form.relativesForm"
                    :key="index"
                  >
                    <p>Relatives</p>
                    <o-field class="col-md-4">
                      <o-input
                        v-model="form.placesVisited"
                        type="text"
                        placeholder="Places Visited"
                      />
                    </o-field>
                    <o-field class="col-md-4">
                      <o-input v-model="form.purpose" type="text" placeholder="Purpose" />
                    </o-field>

                    <o-field class="col-md-4">
                      <o-input
                        v-model="form.dateVisited"
                        type="text"
                        placeholder="Date"
                      />
                    </o-field>
                  </div>
                </div>
              </div>
            </o-step-item>

            <o-step-item label="Payment" icon="money-bill-1">
              <div class="row">
                <div class="row col-md-10 offset-md-1">
                  <div class="col-md-4">
                    <div class="col mt-4">
                      <div class="card mb-4 rounded-3 shadow-sm border-primary h-100vh">
                        <div class="d-flex flex-row mx-3 my-3">
                          <div class="d-flex justify-content-start flex-grow-1">
                            Account Details
                          </div>
                          <div
                            class="d-flex justify-content-end"
                            @click="copyAccount"
                            role="button"
                          >
                            <o-icon pack="fas" icon="copy" size="medium"> </o-icon>
                          </div>
                        </div>
                        <ul class="list-unstyled mt-3 mb-4 ms-3">
                          <li>
                            <span style="color: #86a680">Bank Name:</span>
                            Providus Bank
                          </li>
                          <li>
                            <b style="font-weight: bolder !important">Account Number:</b>
                            123xxxx890
                          </li>
                          <li>
                            <b style="font-weight: bold !important">Account Name:</b>
                            Bitsin Travels and Tours Limited
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 mt-4">
                    <div class="card mb-4 rounded-3 shadow-sm border-primary h-100vh">
                      <div class="d-flex flex-row mx-3 my-3">
                        <div class="d-flex justify-content-start flex-grow-1">
                          Pay with card
                        </div>
                      </div>
                      <ul class="list-unstyled mt-3 mb-4 ms-3">
                        <li>
                          <o-icon
                            pack="fas"
                            icon="cc-mastercard"
                            size="medium"
                            role="button"
                          >
                          </o-icon>
                        </li>
                        <li>
                          <img
                            src="@/assets/images/visa-master.jpeg"
                            height="70"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="col">
                      <div class="card mb-4 rounded-3 shadow-sm border-primary">
                        <div class="card-header py-3 text-bg-primary border-primary">
                          <h4 class="my-0 fw-normal">Pay</h4>
                        </div>
                        <div class="card-body">
                          <h1 class="card-title pricing-card-title">
                            $29<small class="text-muted fw-light"></small>
                          </h1>

                          <o-field class="col-md-4" label="Select" variant="danger">
                            <div class="form-check form-check-inline">
                              <input
                                v-model="isCharity"
                                class="form-check-input"
                                type="radio"
                                name="isCharity"
                                id="yes"
                                value="yes"
                              />
                              <label class="form-check-label" for="inlineRadio1"
                                >Student</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                v-model="isCharity"
                                class="form-check-input"
                                type="radio"
                                name="isCharity"
                                id="no"
                                value="no"
                              />
                              <label class="form-check-label" for="inlineRadio2"
                                >Work</label
                              >
                            </div>
                          </o-field>
                          <button
                            @click="makePayment"
                            type="button"
                            class="w-100 btn btn-lg btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </o-step-item>

            <template slot="navigation" slot-scope="{ previous, next }">
              <div class="o-demo__navigation-wrapper">
                <o-button
                  outlined
                  icon-left="chevron-left"
                  class="btn-primary"
                  v-show="!previous.disabled"
                  @click.prevent="previous.action"
                >
                  Prev
                </o-button>
                <o-button
                  outlined
                  icon-right="chevron-right"
                  class="btn-primary"
                  v-show="!next.disabled"
                  @click.prevent="goNextIfStepIsValid(next.action)"
                >
                  Next
                </o-button>
              </div>
            </template>
          </o-steps>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentStep: 1,
      appliedBefore: "yes",
      travelHistory: "no",
      relativesHistory: "no",
      form: {
        firstName: "",
        education: [
          {
            cos: "",
            pos: "",
            noi: "",
          },
        ],
        employment: [
          {
            name: "",
            address: "",
            role: "",
            doe: "",
          },
        ],
        travelHistoryForm: [
          {
            placesVisited: "",
            purpose: "",
            dateVisited: "",
          },
        ],

        relativesForm: [
          {
            name: "",
            contact: "",
            relationship: "",
            workplace: "",
          },
        ],
      },

      privacy: false,

      terms: false,
      isLoading: false,
      messages: {},
      active: false,
    };
  },
  methods: {
    addEducationRow: function () {
      this.form.education.push({
        cos: "",
        pos: "",
        noi: "",
      });
    },
    deleteEducationRow() {
      this.form.education.pop();
    },

    addEmploymentRow: function () {
      this.form.employment.push({
        name: "",
        address: "",
        role: "",
        doe: "",
      });
    },
    deleteEmploymentRow() {
      this.form.employment.pop();
    },
    addTravelHistory() {
      this.form.travelHistoryForm.push({
        placesVisited: "",
        purpose: "",
        dateVisited: "",
      });
    },
    deleteTravelHistory() {
      this.form.travelHistoryForm.pop();
    },
    addrelatives() {
      this.form.relativesForm.push({
        name: "",
        contact: "",
        relationship: "",
        workplace: "",
      });
    },
    deleterelatives() {
      this.form.relativesForm.pop();
    },
    copyAccount() {
      this.$toast.success("Account copied", {
        position: "top-right",
        duration: 2000,
      });
    },
    isAValidStep(stepNumber) {
      this.messages = {};
      switch (stepNumber) {
        case 1:
          if (this.form.firstName === "") {
            this.messages.firstName = "Name is required";
          }
          if (!this.privacy || !this.terms) {
            this.messages.privacyTerms = "You have to accept both";
          }
          break;
        case 2:
          if (this.form.username === "") {
            this.messages.username = "Username is required";
          }
          if (this.form.password === "") {
            this.messages.password = "Password is required";
          }
          if (this.form.password !== this.form.passwordCheck) {
            this.messages.password = "The two passwords must be equal";
          }
          break;
      }
      this.messages = Object.assign({}, { ...this.messages });
      return Object.keys(this.messages).length === 0;
    },
    goNextIfStepIsValid(action) {
      if (this.isAValidStep(this.currentStep)) {
        action();
      }
    },
    activateAccount() {
      this.isLoading = true;
      setTimeout(() => {
        location.reload();
        this.isLoading = false;
      }, 3 * 1000);
    },
    makePayment() {
      let self = this;
      this.$launchFlutterwave({
        tx_ref: 589876789,
        amount: 85747,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
          email: "shiftback3@gmail.com",
          phonenumber: "08067807300",
          name: "Garuba",
        },
        callback: function (data) {
          // specified callback function
          // self.verifybackend(data);
          console.log(data);
        },
        customizations: {
          title: "Bitsin Travels and Tour",
          description: "Payment for items in cart",
          logo: "@/assets/icon/logo-removebg-preview.png",
        },
      });
    },

    async verifybackend(data) {
      const response = await this.$axios.$post("/shop/confirm-flutterwave", data);
      this.$store.dispatch("cart/clearCart");
      localStorage.removeItem("current_order");
      this.$router.push(`/`);
      console.log(response);
    },
    makeToast(append = false, variant = null) {
      this.$bvToast.toast("Toast body content", {
        title: `Variant ${variant || "default"}`,
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 1000, // default is 5000,
        noAutoHide: true, // in order to stay it open forever
      });
    },
  },
};
</script>

<style scoped>
/* gradient header */
.gradient-header {
  background-image: linear-gradient(
    270.12deg,
    #8dd1b9 0.11%,
    rgba(141, 209, 185, 0) 99.92%
  );
} /* input spaces */
input,
textarea {
  border: 0.5px solid rgb(199, 199, 199);
}
input:focus {
  outline: none;
  font-size: 0.8rem !important;
  /* padding: 2rem 0rem ; */
}
textarea:focus {
  outline: none;
  font-size: 0.8rem !important;
}
::placeholder {
  font-size: 0.8rem !important;
}
label {
  font-weight: bold;
}
.fw-bold {
  font-weight: bolder !important;
}
</style>
