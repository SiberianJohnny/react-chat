import { ProfilePage } from "../ProfilePage";
import App from "../../App";
import React from 'react';
import { store } from "../../../store";
import { Provider } from "react-redux";
import { render } from '@testing-library/react'

describe('article tests', () => {
  describe('snapshot tests', () => {
    it('matches snapshot with article', () => {
      const component = render(
        <React.StrictMode>
          <Provider store={store}>
            <App>
              <ProfilePage />
            </App>
          </Provider>
        </React.StrictMode>
      );
      expect(component).toMatchSnapshot();
    });
  });
});