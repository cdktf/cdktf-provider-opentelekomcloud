# `opentelekomcloud_lb_l7policy_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_lb_l7policy_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2).

# `lbL7PolicyV2` Submodule <a name="`lbL7PolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbL7PolicyV2 <a name="LbL7PolicyV2" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2 opentelekomcloud_lb_l7policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_l7_policy_v2

lbL7PolicyV2.LbL7PolicyV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  listener_id: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  position: typing.Union[int, float] = None,
  redirect_listener_id: str = None,
  redirect_pool_id: str = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: LbL7PolicyV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#action LbL7PolicyV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#listener_id LbL7PolicyV2#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#admin_state_up LbL7PolicyV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#description LbL7PolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#id LbL7PolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#name LbL7PolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#position LbL7PolicyV2#position}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.redirectListenerId">redirect_listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_listener_id LbL7PolicyV2#redirect_listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.redirectPoolId">redirect_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_pool_id LbL7PolicyV2#redirect_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#region LbL7PolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#tenant_id LbL7PolicyV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#action LbL7PolicyV2#action}.

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#listener_id LbL7PolicyV2#listener_id}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#admin_state_up LbL7PolicyV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#description LbL7PolicyV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#id LbL7PolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#name LbL7PolicyV2#name}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.position"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#position LbL7PolicyV2#position}.

---

##### `redirect_listener_id`<sup>Optional</sup> <a name="redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.redirectListenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_listener_id LbL7PolicyV2#redirect_listener_id}.

---

##### `redirect_pool_id`<sup>Optional</sup> <a name="redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.redirectPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_pool_id LbL7PolicyV2#redirect_pool_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#region LbL7PolicyV2#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#tenant_id LbL7PolicyV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#timeouts LbL7PolicyV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetRedirectListenerId">reset_redirect_listener_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetRedirectPoolId">reset_redirect_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#create LbL7PolicyV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#delete LbL7PolicyV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#update LbL7PolicyV2#update}.

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_redirect_listener_id` <a name="reset_redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetRedirectListenerId"></a>

```python
def reset_redirect_listener_id() -> None
```

##### `reset_redirect_pool_id` <a name="reset_redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetRedirectPoolId"></a>

```python
def reset_redirect_pool_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_l7_policy_v2

lbL7PolicyV2.LbL7PolicyV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_l7_policy_v2

lbL7PolicyV2.LbL7PolicyV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_l7_policy_v2

lbL7PolicyV2.LbL7PolicyV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference">LbL7PolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectListenerIdInput">redirect_listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectPoolIdInput">redirect_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectListenerId">redirect_listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectPoolId">redirect_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.timeouts"></a>

```python
timeouts: LbL7PolicyV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference">LbL7PolicyV2TimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_listener_id_input`<sup>Optional</sup> <a name="redirect_listener_id_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectListenerIdInput"></a>

```python
redirect_listener_id_input: str
```

- *Type:* str

---

##### `redirect_pool_id_input`<sup>Optional</sup> <a name="redirect_pool_id_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectPoolIdInput"></a>

```python
redirect_pool_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LbL7PolicyV2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a>, cdktf.IResolvable]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_listener_id`<sup>Required</sup> <a name="redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectListenerId"></a>

```python
redirect_listener_id: str
```

- *Type:* str

---

##### `redirect_pool_id`<sup>Required</sup> <a name="redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.redirectPoolId"></a>

```python
redirect_pool_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbL7PolicyV2Config <a name="LbL7PolicyV2Config" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_l7_policy_v2

lbL7PolicyV2.LbL7PolicyV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  listener_id: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  position: typing.Union[int, float] = None,
  redirect_listener_id: str = None,
  redirect_pool_id: str = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: LbL7PolicyV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#action LbL7PolicyV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#listener_id LbL7PolicyV2#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#admin_state_up LbL7PolicyV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#description LbL7PolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#id LbL7PolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#name LbL7PolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#position LbL7PolicyV2#position}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.redirectListenerId">redirect_listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_listener_id LbL7PolicyV2#redirect_listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.redirectPoolId">redirect_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_pool_id LbL7PolicyV2#redirect_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#region LbL7PolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#tenant_id LbL7PolicyV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#action LbL7PolicyV2#action}.

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#listener_id LbL7PolicyV2#listener_id}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#admin_state_up LbL7PolicyV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#description LbL7PolicyV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#id LbL7PolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#name LbL7PolicyV2#name}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#position LbL7PolicyV2#position}.

---

##### `redirect_listener_id`<sup>Optional</sup> <a name="redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.redirectListenerId"></a>

```python
redirect_listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_listener_id LbL7PolicyV2#redirect_listener_id}.

---

##### `redirect_pool_id`<sup>Optional</sup> <a name="redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.redirectPoolId"></a>

```python
redirect_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#redirect_pool_id LbL7PolicyV2#redirect_pool_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#region LbL7PolicyV2#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#tenant_id LbL7PolicyV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Config.property.timeouts"></a>

```python
timeouts: LbL7PolicyV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#timeouts LbL7PolicyV2#timeouts}

---

### LbL7PolicyV2Timeouts <a name="LbL7PolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_l7_policy_v2

lbL7PolicyV2.LbL7PolicyV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#create LbL7PolicyV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#delete LbL7PolicyV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#update LbL7PolicyV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#create LbL7PolicyV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#delete LbL7PolicyV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.1/docs/resources/lb_l7policy_v2#update LbL7PolicyV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbL7PolicyV2TimeoutsOutputReference <a name="LbL7PolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_l7_policy_v2

lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LbL7PolicyV2Timeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-opentelekomcloud.lbL7PolicyV2.LbL7PolicyV2Timeouts">LbL7PolicyV2Timeouts</a>, cdktf.IResolvable]

---



