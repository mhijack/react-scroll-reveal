# react-scroll-review

DANGER!!! In development mode.

Not even phase 1 yet. I will work on this whenever I have time.
I want to take the same approach react-transition-group and react-router are taking: **render props** cause I really like them, and they are very flexible in comparison to higher-order-components (HOC). If you work with React and use React developer tool, you'll realize once you introduce HOC in your application, the level of nesting will hinder the readability of the developer tool greatly. Each HOC will introduce at least 2 levels of nesting to your application, and it becomes very difficult to find the component you need. (THe search function will only list out the components that contain attributes matching your keyword, erasing other elements in the inspector).

# TODO

    1. Figure out how to get reference to children (single/multiple children case)
        1. React.createRef()?
        2. React.forwardRef((props, ref) => (
            <button ref={ref} className="FancyButton">
                {props.children}
            </button>
            ));
    2. Error handling (edge cases)

# Thoughts

I can use render props pattern, (already enabled the pattern by checking:

    `{(this.props.children && this.props.children(props, this.getRef))
    || (this.props.render && this.props.render(props, this.getRef))}`

However, how do I pass the ref down to children or render? I could turn render & children into a functionthat accepts 2 parameters: (state, ref), but it still won't allow me to directly access what's being rendered (children in this case).

I want to allow users to use functional components as well. For now, the only way I can think of would be to wrap children in an outter div which user cannot access because it is done inside my code. However this has 1 drawback: it limits the styling option user has. The user has to take into consideration the fact that everything they put inside render props will always have a wrapper div (or span?). If I use div, it is an block element, and span is an inline element. No matter which element I use, the user won't be able to directly modify its styling. So, this path is a bad idea.

---
