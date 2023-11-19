import Card from "../card";
export function FeatureCard(props) {
    return (<a class="flex-1" href={props.href}>
      <Card class="flex-1 relative">
        <h1 class="text-xl relative mb-1 z-10">Resources</h1>
        <p class="mb-[120px] relative z-10">Manage your resources</p>
      </Card>
    </a>);
}
