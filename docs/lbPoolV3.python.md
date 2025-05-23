# `lbPoolV3` Submodule <a name="`lbPoolV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbPoolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbPoolV3 <a name="LbPoolV3" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3 opentelekomcloud_lb_pool_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lb_algorithm: str,
  protocol: str,
  description: str = None,
  id: str = None,
  listener_id: str = None,
  loadbalancer_id: str = None,
  member_deletion_protection: typing.Union[bool, IResolvable] = None,
  name: str = None,
  project_id: str = None,
  session_persistence: LbPoolV3SessionPersistence = None,
  type: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.lbAlgorithm">lb_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#lb_algorithm LbPoolV3#lb_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#protocol LbPoolV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#description LbPoolV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#id LbPoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#listener_id LbPoolV3#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#loadbalancer_id LbPoolV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.memberDeletionProtection">member_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#member_deletion_protection LbPoolV3#member_deletion_protection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#name LbPoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#project_id LbPoolV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.sessionPersistence">session_persistence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a></code> | session_persistence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#type LbPoolV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#vpc_id LbPoolV3#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lb_algorithm`<sup>Required</sup> <a name="lb_algorithm" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.lbAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#lb_algorithm LbPoolV3#lb_algorithm}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#protocol LbPoolV3#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#description LbPoolV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#id LbPoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listener_id`<sup>Optional</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#listener_id LbPoolV3#listener_id}.

---

##### `loadbalancer_id`<sup>Optional</sup> <a name="loadbalancer_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.loadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#loadbalancer_id LbPoolV3#loadbalancer_id}.

---

##### `member_deletion_protection`<sup>Optional</sup> <a name="member_deletion_protection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.memberDeletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#member_deletion_protection LbPoolV3#member_deletion_protection}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#name LbPoolV3#name}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#project_id LbPoolV3#project_id}.

---

##### `session_persistence`<sup>Optional</sup> <a name="session_persistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.sessionPersistence"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

session_persistence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#session_persistence LbPoolV3#session_persistence}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#type LbPoolV3#type}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#vpc_id LbPoolV3#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence">put_session_persistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetListenerId">reset_listener_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetLoadbalancerId">reset_loadbalancer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetMemberDeletionProtection">reset_member_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetSessionPersistence">reset_session_persistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_session_persistence` <a name="put_session_persistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence"></a>

```python
def put_session_persistence(
  type: str,
  cookie_name: str = None,
  persistence_timeout: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#type LbPoolV3#type}.

---

###### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence.parameter.cookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#cookie_name LbPoolV3#cookie_name}.

---

###### `persistence_timeout`<sup>Optional</sup> <a name="persistence_timeout" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.putSessionPersistence.parameter.persistenceTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#persistence_timeout LbPoolV3#persistence_timeout}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_listener_id` <a name="reset_listener_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetListenerId"></a>

```python
def reset_listener_id() -> None
```

##### `reset_loadbalancer_id` <a name="reset_loadbalancer_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetLoadbalancerId"></a>

```python
def reset_loadbalancer_id() -> None
```

##### `reset_member_deletion_protection` <a name="reset_member_deletion_protection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetMemberDeletionProtection"></a>

```python
def reset_member_deletion_protection() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_session_persistence` <a name="reset_session_persistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetSessionPersistence"></a>

```python
def reset_session_persistence() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbPoolV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbPoolV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbPoolV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbPoolV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbPoolV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistence">session_persistence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference">LbPoolV3SessionPersistenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithmInput">lb_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerIdInput">loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtectionInput">member_deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistenceInput">session_persistence_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithm">lb_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtection">member_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `session_persistence`<sup>Required</sup> <a name="session_persistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistence"></a>

```python
session_persistence: LbPoolV3SessionPersistenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference">LbPoolV3SessionPersistenceOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lb_algorithm_input`<sup>Optional</sup> <a name="lb_algorithm_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithmInput"></a>

```python
lb_algorithm_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `loadbalancer_id_input`<sup>Optional</sup> <a name="loadbalancer_id_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerIdInput"></a>

```python
loadbalancer_id_input: str
```

- *Type:* str

---

##### `member_deletion_protection_input`<sup>Optional</sup> <a name="member_deletion_protection_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtectionInput"></a>

```python
member_deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `session_persistence_input`<sup>Optional</sup> <a name="session_persistence_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.sessionPersistenceInput"></a>

```python
session_persistence_input: LbPoolV3SessionPersistence
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lb_algorithm`<sup>Required</sup> <a name="lb_algorithm" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.lbAlgorithm"></a>

```python
lb_algorithm: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

---

##### `member_deletion_protection`<sup>Required</sup> <a name="member_deletion_protection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.memberDeletionProtection"></a>

```python
member_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbPoolV3Config <a name="LbPoolV3Config" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  lb_algorithm: str,
  protocol: str,
  description: str = None,
  id: str = None,
  listener_id: str = None,
  loadbalancer_id: str = None,
  member_deletion_protection: typing.Union[bool, IResolvable] = None,
  name: str = None,
  project_id: str = None,
  session_persistence: LbPoolV3SessionPersistence = None,
  type: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lbAlgorithm">lb_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#lb_algorithm LbPoolV3#lb_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#protocol LbPoolV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#description LbPoolV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#id LbPoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#listener_id LbPoolV3#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#loadbalancer_id LbPoolV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.memberDeletionProtection">member_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#member_deletion_protection LbPoolV3#member_deletion_protection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#name LbPoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#project_id LbPoolV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.sessionPersistence">session_persistence</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a></code> | session_persistence block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#type LbPoolV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#vpc_id LbPoolV3#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lb_algorithm`<sup>Required</sup> <a name="lb_algorithm" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.lbAlgorithm"></a>

```python
lb_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#lb_algorithm LbPoolV3#lb_algorithm}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#protocol LbPoolV3#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#description LbPoolV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#id LbPoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listener_id`<sup>Optional</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#listener_id LbPoolV3#listener_id}.

---

##### `loadbalancer_id`<sup>Optional</sup> <a name="loadbalancer_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#loadbalancer_id LbPoolV3#loadbalancer_id}.

---

##### `member_deletion_protection`<sup>Optional</sup> <a name="member_deletion_protection" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.memberDeletionProtection"></a>

```python
member_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#member_deletion_protection LbPoolV3#member_deletion_protection}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#name LbPoolV3#name}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#project_id LbPoolV3#project_id}.

---

##### `session_persistence`<sup>Optional</sup> <a name="session_persistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.sessionPersistence"></a>

```python
session_persistence: LbPoolV3SessionPersistence
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

session_persistence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#session_persistence LbPoolV3#session_persistence}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#type LbPoolV3#type}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#vpc_id LbPoolV3#vpc_id}.

---

### LbPoolV3SessionPersistence <a name="LbPoolV3SessionPersistence" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3SessionPersistence(
  type: str,
  cookie_name: str = None,
  persistence_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#type LbPoolV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.cookieName">cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#cookie_name LbPoolV3#cookie_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.persistenceTimeout">persistence_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#persistence_timeout LbPoolV3#persistence_timeout}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#type LbPoolV3#type}.

---

##### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#cookie_name LbPoolV3#cookie_name}.

---

##### `persistence_timeout`<sup>Optional</sup> <a name="persistence_timeout" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence.property.persistenceTimeout"></a>

```python
persistence_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.39/docs/resources/lb_pool_v3#persistence_timeout LbPoolV3#persistence_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbPoolV3SessionPersistenceOutputReference <a name="LbPoolV3SessionPersistenceOutputReference" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_pool_v3

lbPoolV3.LbPoolV3SessionPersistenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetCookieName">reset_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetPersistenceTimeout">reset_persistence_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookie_name` <a name="reset_cookie_name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetCookieName"></a>

```python
def reset_cookie_name() -> None
```

##### `reset_persistence_timeout` <a name="reset_persistence_timeout" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.resetPersistenceTimeout"></a>

```python
def reset_persistence_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieNameInput">cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeoutInput">persistence_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeout">persistence_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name_input`<sup>Optional</sup> <a name="cookie_name_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieNameInput"></a>

```python
cookie_name_input: str
```

- *Type:* str

---

##### `persistence_timeout_input`<sup>Optional</sup> <a name="persistence_timeout_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeoutInput"></a>

```python
persistence_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `persistence_timeout`<sup>Required</sup> <a name="persistence_timeout" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.persistenceTimeout"></a>

```python
persistence_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistenceOutputReference.property.internalValue"></a>

```python
internal_value: LbPoolV3SessionPersistence
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPoolV3.LbPoolV3SessionPersistence">LbPoolV3SessionPersistence</a>

---



