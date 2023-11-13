# React Native development - exercises

1. The time to practice the View and Text elements. First commit creating the LittleLemonFooter and LittleLemonHeader, updating the code using these two core components and adding some styling properties in them.

2. Addition of a WelcomeScreen js file, also with View and Text. The styles are accordingly to the Little Lemon restaurant design.

3. New component: MenuItem.js, with the using of ScrollView (a core component) for the menu list.

4. Now I start using stylesheetAPI in all my JS files, to help abstract the component styles and allow to give meaningful names to each style, thus making the component readable and clean.

5. Replacing the ScrollView component with the built-in React Native FlatList component, to improve performance with large lists. The lazy rendering approach is used by the FlatList component to render large lists efficiently. Exploring some flat list properties.

6. It is time to use the SectionList, a built in react native component, that combines the FlatList features with section support, rendering section headers.

7. Adding feedback form, using the TextInput core react native component, with some props like style, onChangeText, placeholder etc. I am commenting the other components in my App.js because I want to see the result of this new one and I do not know yet how to use routing in React Native.

8. I build a simple login page for the Little Lemon app, creating an email address and password text input box and allowing the user to enter the requested information. The feedback form is in comments this time.

9. Including pressable component, to detect various stages of press interactions. It comes with some in built methods, comme onPressIn (press activated) and onPressOut (press deactivated) and can manage time and area. Another useful method added is HitRect, that defines pressable range for an element. I am applying this component in the login screen as a log in button and in the menu items page as a view menu button.

10. Render images, using image component. First I import the images into my project. Then I use the image component with some props for adding accessibility features, for example, and also apply some styling options.

11. Using useColorScheme hook, that provides and subscribes color schemes updates from the the appearance module in React Native. I also add the useWindowDimensions hook, that retrieve information about windows height and width values, as well as the font scale.

12. Applying React Navigation, the most popular navigation library for React Native apps. I also use the stack navigator, that provides a way to transition between screens (to be continued), shows a header title for a screen, defines a initial root of the navigator and uses the screen options to define a background color for the header.

13. Implementing navigation rules that allows the user to move back and forth the screens without getting lost. I use the navigation prop, a Stack Navigator prop passed to every screen component.

14. Setting up tab navigation, using createBottomTabNavigator. Now the user can navigate easily between screens using the tab in the bottom of the screen, as you can see in the last screen shot added to the project.

15. Using drawer navigation. I add a hamburger menu, with a drawer navigator and the drawer screens: Home, Login, Feedback and Menu.
