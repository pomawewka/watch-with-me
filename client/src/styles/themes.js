const defaults = {
  emptyShadow: "0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(255, 255, 255, 0)",
  emptyInnerShadow: "inset 0 0 0 rgba(0, 0, 0, 0), inset 0 0 0 rgba(255, 255, 255, 0)",
  transition: "box-shadow .6s cubic-bezier(0, 0.8, 0.4, 1), text-shadow .6s cubic-bezier(0, 0.8, 0.4, 1), color .6s cubic-bezier(0, 0.8, 0.4, 1), background .6s cubic-bezier(0, 0.8, 0.4, 1)"
}

export const light = {
  name: "light",
  background: "#EBECF0",
  color: "#8f939e",
  shadowsColor: "rgba(0, 0, 0, .2)",
  lightsColor: "rgba(255, 255, 255, .8)",
  textInnerShadow: ".4",
  textInnerLights: "1",
  backgroundShadow: "linear-gradient(170deg, rgba(255, 255, 255, .05) 50%, rgba(0, 0, 0, .03) 100%)",
  backgroundShadowActive: "linear-gradient(340deg, rgba(255, 255, 255, .05) 50%, rgba(0, 0, 0, .03) 100%)",
  transition: defaults.transition,
}

light.shadow       = `5px 5px 8px ${light.shadowsColor}, -5px -5px 8px ${light.lightsColor}`
light.smallShadow  = `3px 3px 5px ${light.shadowsColor}, -3px -3px 5px ${light.lightsColor}`
light.innerShadow  = `inset 3px 3px 5px ${light.shadowsColor}, inset -3px -3px 5px ${light.lightsColor}`
light.textShadow   = `.03em .03em .05em ${light.shadowsColor}, -.03em -.03em .06em ${light.lightsColor}`

light.buttonShadow       = `${defaults.emptyInnerShadow}, ${light.smallShadow}`
light.buttonShadowHover  = `${defaults.emptyInnerShadow}, 1px 1px 3px ${light.shadowsColor}, -1px -1px 3px ${light.lightsColor}`
light.buttonShadowActive = `inset 2px 2px 5px ${light.shadowsColor}, inset -2px -2px 5px ${light.lightsColor}, ${defaults.emptyShadow}`


export const dark = {
  name: "dark",
  background: "#363537",
  color: "#1d1d1d",
  shadowsColor: "rgba(0, 0, 0, .4)",
  lightsColor: "rgba(255, 255, 255, .05)",
  textInnerShadow: '.8',
  textInnerLights: '.1',
  backgroundShadow: "linear-gradient(170deg, rgba(255, 255, 255, .01) 50%,rgba(0, 0, 0, .05) 100%)",
  backgroundShadowActive: "linear-gradient(340deg, rgba(255, 255, 255, .01) 50%, rgba(0, 0, 0, .05) 100%)",
  emptyShadow: defaults.emptyShadow,
  emptyInnerShadow: defaults.emptyInnerShadow,
  transition: defaults.transition,
}

dark.shadow       = `5px 5px 8px ${dark.shadowsColor}, -5px -5px 8px ${dark.lightsColor}`
dark.smallShadow  = `3px 3px 5px ${dark.shadowsColor}, -3px -3px 5px ${dark.lightsColor}`
dark.innerShadow  = `inset 3px 3px 5px ${dark.shadowsColor}, inset -3px -3px 5px ${dark.lightsColor}`
dark.textShadow   = `.03em .03em .06em ${dark.shadowsColor}, -.03em -.03em .06em ${dark.lightsColor}`

dark.buttonShadow       = `${defaults.emptyInnerShadow}, ${dark.smallShadow}`
dark.buttonShadowHover  = `${defaults.emptyInnerShadow}, 1px 1px 3px ${dark.shadowsColor}, -1px -1px 3px ${dark.lightsColor}`
dark.buttonShadowActive = `inset 2px 2px 5px ${dark.shadowsColor}, inset -2px -2px 5px ${dark.lightsColor}, ${defaults.emptyShadow}`