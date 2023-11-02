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
