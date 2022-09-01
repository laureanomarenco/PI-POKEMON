export default function validate(state) {
  const errors = {};

  const validatorURL =  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

  if (!state.name) {
    errors.name = "Your Pokemon needs to have a name";
  } else if (state.name.length < 3) {
    errors.name = "Your Pokemon name needs to have at least 3 characters";
  }

  if (!state.hp) {
    errors.hp = "Your Pokemon needs to have points of life";
  }
  if (state.hp < 1) {
    errors.hp = "Your Pokemon needs to have more points of life";
  }
  if (state.hp > 300) {
    errors.hp = "You can't set your hp in more than 300 points of life";
  }

  if (!state.attack) {
    errors.attack = "Your Pokemon needs to have points of attack";
  }
  if (state.attack < 1) {
    errors.attack = "Your Pokemon needs to have more points of attack";
  }
  if (state.attack > 300) {
    errors.attack = "You can't set your hp in more than 300 points of attack";
  }

  if (!state.defense) {
    errors.defense = "Your Pokemon needs to have points of defense";
  }
  if (state.defense < 1) {
    errors.defense = "Your Pokemon needs to have more points of defense";
  }
  if (state.defense > 300) {
    errors.defense = "You can't set your hp in more than 300 points of defense";
  }

  if (!state.velocity) {
    errors.velocity = "Your Pokemon needs to have points of velocity";
  }
  if (state.velocity < 1) {
    errors.velocity = "Your Pokemon needs to have more points of velocity";
  }
  if (state.velocity > 300) {
    errors.velocity =
      "You can't set your hp in more than 300 points of velocity";
  }

  if (!state.height) {
    errors.height = "Your Pokemon needs to have points of height";
  }
  if (state.height < 1) {
    errors.height = "Your Pokemon needs to have more points of height";
  }
  if (state.height > 300) {
    errors.height = "You can't set your hp in more than 300 points of height";
  }

  if (!state.weight) {
    errors.weight = "Your Pokemon needs to have points of weight";
  }
  if (state.weight < 1) {
    errors.weight = "Your Pokemon needs to have more points of weight";
  }
  if (state.weight > 300) {
    errors.weight = "You can't set your hp in more than 300 points of weight";
  }

  if (!state.imageDefault) {
    errors.imageDefault = "Your Pokemon needs an image";
  }
  if (!validatorURL.test(state.imageDefault)) {
    errors.imageDefault = "Your image must be a valid URL";
  }

  return errors;
}