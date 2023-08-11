# `opentelekomcloud_lb_policy_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_lb_policy_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3).

# `lbPolicyV3` Submodule <a name="`lbPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbPolicyV3 <a name="LbPolicyV3" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3 opentelekomcloud_lb_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3(
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
  description: str = None,
  fixed_response_config: LbPolicyV3FixedResponseConfig = None,
  id: str = None,
  name: str = None,
  position: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  project_id: str = None,
  redirect_listener_id: str = None,
  redirect_pool_id: str = None,
  redirect_pools_config: typing.Union[IResolvable, typing.List[LbPolicyV3RedirectPoolsConfig]] = None,
  redirect_url: str = None,
  redirect_url_config: LbPolicyV3RedirectUrlConfig = None,
  rules: typing.Union[IResolvable, typing.List[LbPolicyV3Rules]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#action LbPolicyV3#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#listener_id LbPolicyV3#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#description LbPolicyV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a></code> | fixed_response_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#id LbPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#name LbPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#position LbPolicyV3#position}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#priority LbPolicyV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#project_id LbPolicyV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectListenerId">redirect_listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_listener_id LbPolicyV3#redirect_listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectPoolId">redirect_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_pool_id LbPolicyV3#redirect_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectPoolsConfig">redirect_pools_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]</code> | redirect_pools_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_url LbPolicyV3#redirect_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectUrlConfig">redirect_url_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a></code> | redirect_url_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]</code> | rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#action LbPolicyV3#action}.

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.listenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#listener_id LbPolicyV3#listener_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#description LbPolicyV3#description}.

---

##### `fixed_response_config`<sup>Optional</sup> <a name="fixed_response_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.fixedResponseConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

fixed_response_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#fixed_response_config LbPolicyV3#fixed_response_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#id LbPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#name LbPolicyV3#name}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.position"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#position LbPolicyV3#position}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#priority LbPolicyV3#priority}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#project_id LbPolicyV3#project_id}.

---

##### `redirect_listener_id`<sup>Optional</sup> <a name="redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectListenerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_listener_id LbPolicyV3#redirect_listener_id}.

---

##### `redirect_pool_id`<sup>Optional</sup> <a name="redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_pool_id LbPolicyV3#redirect_pool_id}.

---

##### `redirect_pools_config`<sup>Optional</sup> <a name="redirect_pools_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectPoolsConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]

redirect_pools_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_pools_config LbPolicyV3#redirect_pools_config}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_url LbPolicyV3#redirect_url}.

---

##### `redirect_url_config`<sup>Optional</sup> <a name="redirect_url_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.redirectUrlConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

redirect_url_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_url_config LbPolicyV3#redirect_url_config}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#rules LbPolicyV3#rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig">put_fixed_response_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectPoolsConfig">put_redirect_pools_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig">put_redirect_url_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetFixedResponseConfig">reset_fixed_response_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectListenerId">reset_redirect_listener_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolId">reset_redirect_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolsConfig">reset_redirect_pools_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrlConfig">reset_redirect_url_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRules">reset_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_fixed_response_config` <a name="put_fixed_response_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig"></a>

```python
def put_fixed_response_config(
  status_code: str,
  content_type: str = None,
  message_body: str = None
) -> None
```

###### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#status_code LbPolicyV3#status_code}.

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#content_type LbPolicyV3#content_type}.

---

###### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig.parameter.messageBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#message_body LbPolicyV3#message_body}.

---

##### `put_redirect_pools_config` <a name="put_redirect_pools_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectPoolsConfig"></a>

```python
def put_redirect_pools_config(
  value: typing.Union[IResolvable, typing.List[LbPolicyV3RedirectPoolsConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectPoolsConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]

---

##### `put_redirect_url_config` <a name="put_redirect_url_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig"></a>

```python
def put_redirect_url_config(
  status_code: str,
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None
) -> None
```

###### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#status_code LbPolicyV3#status_code}.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#host LbPolicyV3#host}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#path LbPolicyV3#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig.parameter.port"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#port LbPolicyV3#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#protocol LbPolicyV3#protocol}.

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#query LbPolicyV3#query}.

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[LbPolicyV3Rules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fixed_response_config` <a name="reset_fixed_response_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetFixedResponseConfig"></a>

```python
def reset_fixed_response_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_redirect_listener_id` <a name="reset_redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectListenerId"></a>

```python
def reset_redirect_listener_id() -> None
```

##### `reset_redirect_pool_id` <a name="reset_redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolId"></a>

```python
def reset_redirect_pool_id() -> None
```

##### `reset_redirect_pools_config` <a name="reset_redirect_pools_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolsConfig"></a>

```python
def reset_redirect_pools_config() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```

##### `reset_redirect_url_config` <a name="reset_redirect_url_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrlConfig"></a>

```python
def reset_redirect_url_config() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRules"></a>

```python
def reset_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference">LbPolicyV3FixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfig">redirect_pools_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList">LbPolicyV3RedirectPoolsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfig">redirect_url_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference">LbPolicyV3RedirectUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList">LbPolicyV3RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfigInput">fixed_response_config_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerIdInput">listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerIdInput">redirect_listener_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolIdInput">redirect_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfigInput">redirect_pools_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfigInput">redirect_url_config_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerId">listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerId">redirect_listener_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolId">redirect_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fixed_response_config`<sup>Required</sup> <a name="fixed_response_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfig"></a>

```python
fixed_response_config: LbPolicyV3FixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference">LbPolicyV3FixedResponseConfigOutputReference</a>

---

##### `redirect_pools_config`<sup>Required</sup> <a name="redirect_pools_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfig"></a>

```python
redirect_pools_config: LbPolicyV3RedirectPoolsConfigList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList">LbPolicyV3RedirectPoolsConfigList</a>

---

##### `redirect_url_config`<sup>Required</sup> <a name="redirect_url_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfig"></a>

```python
redirect_url_config: LbPolicyV3RedirectUrlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference">LbPolicyV3RedirectUrlConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rules"></a>

```python
rules: LbPolicyV3RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList">LbPolicyV3RulesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `fixed_response_config_input`<sup>Optional</sup> <a name="fixed_response_config_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfigInput"></a>

```python
fixed_response_config_input: LbPolicyV3FixedResponseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listener_id_input`<sup>Optional</sup> <a name="listener_id_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerIdInput"></a>

```python
listener_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `redirect_listener_id_input`<sup>Optional</sup> <a name="redirect_listener_id_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerIdInput"></a>

```python
redirect_listener_id_input: str
```

- *Type:* str

---

##### `redirect_pool_id_input`<sup>Optional</sup> <a name="redirect_pool_id_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolIdInput"></a>

```python
redirect_pool_id_input: str
```

- *Type:* str

---

##### `redirect_pools_config_input`<sup>Optional</sup> <a name="redirect_pools_config_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfigInput"></a>

```python
redirect_pools_config_input: typing.Union[IResolvable, typing.List[LbPolicyV3RedirectPoolsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]

---

##### `redirect_url_config_input`<sup>Optional</sup> <a name="redirect_url_config_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfigInput"></a>

```python
redirect_url_config_input: LbPolicyV3RedirectUrlConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[LbPolicyV3Rules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `redirect_listener_id`<sup>Required</sup> <a name="redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerId"></a>

```python
redirect_listener_id: str
```

- *Type:* str

---

##### `redirect_pool_id`<sup>Required</sup> <a name="redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolId"></a>

```python
redirect_pool_id: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbPolicyV3Config <a name="LbPolicyV3Config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  listener_id: str,
  description: str = None,
  fixed_response_config: LbPolicyV3FixedResponseConfig = None,
  id: str = None,
  name: str = None,
  position: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  project_id: str = None,
  redirect_listener_id: str = None,
  redirect_pool_id: str = None,
  redirect_pools_config: typing.Union[IResolvable, typing.List[LbPolicyV3RedirectPoolsConfig]] = None,
  redirect_url: str = None,
  redirect_url_config: LbPolicyV3RedirectUrlConfig = None,
  rules: typing.Union[IResolvable, typing.List[LbPolicyV3Rules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#action LbPolicyV3#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.listenerId">listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#listener_id LbPolicyV3#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#description LbPolicyV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a></code> | fixed_response_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#id LbPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#name LbPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#position LbPolicyV3#position}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#priority LbPolicyV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#project_id LbPolicyV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectListenerId">redirect_listener_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_listener_id LbPolicyV3#redirect_listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolId">redirect_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_pool_id LbPolicyV3#redirect_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolsConfig">redirect_pools_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]</code> | redirect_pools_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_url LbPolicyV3#redirect_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrlConfig">redirect_url_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a></code> | redirect_url_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]</code> | rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#action LbPolicyV3#action}.

---

##### `listener_id`<sup>Required</sup> <a name="listener_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.listenerId"></a>

```python
listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#listener_id LbPolicyV3#listener_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#description LbPolicyV3#description}.

---

##### `fixed_response_config`<sup>Optional</sup> <a name="fixed_response_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.fixedResponseConfig"></a>

```python
fixed_response_config: LbPolicyV3FixedResponseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

fixed_response_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#fixed_response_config LbPolicyV3#fixed_response_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#id LbPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#name LbPolicyV3#name}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#position LbPolicyV3#position}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#priority LbPolicyV3#priority}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#project_id LbPolicyV3#project_id}.

---

##### `redirect_listener_id`<sup>Optional</sup> <a name="redirect_listener_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectListenerId"></a>

```python
redirect_listener_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_listener_id LbPolicyV3#redirect_listener_id}.

---

##### `redirect_pool_id`<sup>Optional</sup> <a name="redirect_pool_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolId"></a>

```python
redirect_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_pool_id LbPolicyV3#redirect_pool_id}.

---

##### `redirect_pools_config`<sup>Optional</sup> <a name="redirect_pools_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolsConfig"></a>

```python
redirect_pools_config: typing.Union[IResolvable, typing.List[LbPolicyV3RedirectPoolsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]

redirect_pools_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_pools_config LbPolicyV3#redirect_pools_config}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_url LbPolicyV3#redirect_url}.

---

##### `redirect_url_config`<sup>Optional</sup> <a name="redirect_url_config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrlConfig"></a>

```python
redirect_url_config: LbPolicyV3RedirectUrlConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

redirect_url_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#redirect_url_config LbPolicyV3#redirect_url_config}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[LbPolicyV3Rules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#rules LbPolicyV3#rules}

---

### LbPolicyV3FixedResponseConfig <a name="LbPolicyV3FixedResponseConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3FixedResponseConfig(
  status_code: str,
  content_type: str = None,
  message_body: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#status_code LbPolicyV3#status_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#content_type LbPolicyV3#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.messageBody">message_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#message_body LbPolicyV3#message_body}. |

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#status_code LbPolicyV3#status_code}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#content_type LbPolicyV3#content_type}.

---

##### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#message_body LbPolicyV3#message_body}.

---

### LbPolicyV3RedirectPoolsConfig <a name="LbPolicyV3RedirectPoolsConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3RedirectPoolsConfig(
  pool_id: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#pool_id LbPolicyV3#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#weight LbPolicyV3#weight}. |

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#pool_id LbPolicyV3#pool_id}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#weight LbPolicyV3#weight}.

---

### LbPolicyV3RedirectUrlConfig <a name="LbPolicyV3RedirectUrlConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3RedirectUrlConfig(
  status_code: str,
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#status_code LbPolicyV3#status_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#host LbPolicyV3#host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#path LbPolicyV3#path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#port LbPolicyV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#protocol LbPolicyV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#query LbPolicyV3#query}. |

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#status_code LbPolicyV3#status_code}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#host LbPolicyV3#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#path LbPolicyV3#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#port LbPolicyV3#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#protocol LbPolicyV3#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#query LbPolicyV3#query}.

---

### LbPolicyV3Rules <a name="LbPolicyV3Rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3Rules(
  compare_type: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.compareType">compare_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#compare_type LbPolicyV3#compare_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#type LbPolicyV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#value LbPolicyV3#value}. |

---

##### `compare_type`<sup>Required</sup> <a name="compare_type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.compareType"></a>

```python
compare_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#compare_type LbPolicyV3#compare_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#type LbPolicyV3#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/lb_policy_v3#value LbPolicyV3#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbPolicyV3FixedResponseConfigOutputReference <a name="LbPolicyV3FixedResponseConfigOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetMessageBody">reset_message_body</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_message_body` <a name="reset_message_body" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetMessageBody"></a>

```python
def reset_message_body() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBodyInput">message_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `message_body_input`<sup>Optional</sup> <a name="message_body_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBodyInput"></a>

```python
message_body_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.internalValue"></a>

```python
internal_value: LbPolicyV3FixedResponseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

---


### LbPolicyV3RedirectPoolsConfigList <a name="LbPolicyV3RedirectPoolsConfigList" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3RedirectPoolsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LbPolicyV3RedirectPoolsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LbPolicyV3RedirectPoolsConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]]

---


### LbPolicyV3RedirectPoolsConfigOutputReference <a name="LbPolicyV3RedirectPoolsConfigOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbPolicyV3RedirectPoolsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig">LbPolicyV3RedirectPoolsConfig</a>]

---


### LbPolicyV3RedirectUrlConfigOutputReference <a name="LbPolicyV3RedirectUrlConfigOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.internalValue"></a>

```python
internal_value: LbPolicyV3RedirectUrlConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

---


### LbPolicyV3RulesList <a name="LbPolicyV3RulesList" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3RulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LbPolicyV3RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LbPolicyV3Rules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]]

---


### LbPolicyV3RulesOutputReference <a name="LbPolicyV3RulesOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_policy_v3

lbPolicyV3.LbPolicyV3RulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareTypeInput">compare_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareType">compare_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compare_type_input`<sup>Optional</sup> <a name="compare_type_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareTypeInput"></a>

```python
compare_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `compare_type`<sup>Required</sup> <a name="compare_type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareType"></a>

```python
compare_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbPolicyV3Rules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules">LbPolicyV3Rules</a>]

---



