# `privateNatSnatRuleV3` Submodule <a name="`privateNatSnatRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNatSnatRuleV3 <a name="PrivateNatSnatRuleV3" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3 opentelekomcloud_private_nat_snat_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_id: str,
  transit_ip_ids: typing.List[str],
  cidr: str = None,
  description: str = None,
  id: str = None,
  timeouts: PrivateNatSnatRuleV3Timeouts = None,
  virsubnet_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.transitIpIds">transit_ip_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.virsubnetId">virsubnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}.

---

##### `transit_ip_ids`<sup>Required</sup> <a name="transit_ip_ids" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.transitIpIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#timeouts PrivateNatSnatRuleV3#timeouts}

---

##### `virsubnet_id`<sup>Optional</sup> <a name="virsubnet_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.virsubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetVirsubnetId">reset_virsubnet_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#create PrivateNatSnatRuleV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#delete PrivateNatSnatRuleV3#delete}.

---

##### `reset_cidr` <a name="reset_cidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virsubnet_id` <a name="reset_virsubnet_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetVirsubnetId"></a>

```python
def reset_virsubnet_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateNatSnatRuleV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateNatSnatRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateNatSnatRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference">PrivateNatSnatRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpAssociations">transit_ip_associations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList">PrivateNatSnatRuleV3TransitIpAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIdsInput">transit_ip_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetIdInput">virsubnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIds">transit_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetId">virsubnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeouts"></a>

```python
timeouts: PrivateNatSnatRuleV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference">PrivateNatSnatRuleV3TimeoutsOutputReference</a>

---

##### `transit_ip_associations`<sup>Required</sup> <a name="transit_ip_associations" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpAssociations"></a>

```python
transit_ip_associations: PrivateNatSnatRuleV3TransitIpAssociationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList">PrivateNatSnatRuleV3TransitIpAssociationsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivateNatSnatRuleV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>]

---

##### `transit_ip_ids_input`<sup>Optional</sup> <a name="transit_ip_ids_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIdsInput"></a>

```python
transit_ip_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virsubnet_id_input`<sup>Optional</sup> <a name="virsubnet_id_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetIdInput"></a>

```python
virsubnet_id_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `transit_ip_ids`<sup>Required</sup> <a name="transit_ip_ids" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIds"></a>

```python
transit_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virsubnet_id`<sup>Required</sup> <a name="virsubnet_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetId"></a>

```python
virsubnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNatSnatRuleV3Config <a name="PrivateNatSnatRuleV3Config" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_id: str,
  transit_ip_ids: typing.List[str],
  cidr: str = None,
  description: str = None,
  id: str = None,
  timeouts: PrivateNatSnatRuleV3Timeouts = None,
  virsubnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.transitIpIds">transit_ip_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.virsubnetId">virsubnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}.

---

##### `transit_ip_ids`<sup>Required</sup> <a name="transit_ip_ids" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.transitIpIds"></a>

```python
transit_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.timeouts"></a>

```python
timeouts: PrivateNatSnatRuleV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#timeouts PrivateNatSnatRuleV3#timeouts}

---

##### `virsubnet_id`<sup>Optional</sup> <a name="virsubnet_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.virsubnetId"></a>

```python
virsubnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}.

---

### PrivateNatSnatRuleV3Timeouts <a name="PrivateNatSnatRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#create PrivateNatSnatRuleV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#delete PrivateNatSnatRuleV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#create PrivateNatSnatRuleV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/resources/private_nat_snat_rule_v3#delete PrivateNatSnatRuleV3#delete}.

---

### PrivateNatSnatRuleV3TransitIpAssociations <a name="PrivateNatSnatRuleV3TransitIpAssociations" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations()
```


## Classes <a name="Classes" id="Classes"></a>

### PrivateNatSnatRuleV3TimeoutsOutputReference <a name="PrivateNatSnatRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateNatSnatRuleV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>]

---


### PrivateNatSnatRuleV3TransitIpAssociationsList <a name="PrivateNatSnatRuleV3TransitIpAssociationsList" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrivateNatSnatRuleV3TransitIpAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PrivateNatSnatRuleV3TransitIpAssociationsOutputReference <a name="PrivateNatSnatRuleV3TransitIpAssociationsOutputReference" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import private_nat_snat_rule_v3

privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpAddress">transit_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpId">transit_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations">PrivateNatSnatRuleV3TransitIpAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transit_ip_address`<sup>Required</sup> <a name="transit_ip_address" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpAddress"></a>

```python
transit_ip_address: str
```

- *Type:* str

---

##### `transit_ip_id`<sup>Required</sup> <a name="transit_ip_id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpId"></a>

```python
transit_ip_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: PrivateNatSnatRuleV3TransitIpAssociations
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations">PrivateNatSnatRuleV3TransitIpAssociations</a>

---



