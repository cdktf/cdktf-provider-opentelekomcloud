# `apigwThrottlingPolicyV2` Submodule <a name="`apigwThrottlingPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwThrottlingPolicyV2 <a name="ApigwThrottlingPolicyV2" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2 opentelekomcloud_apigw_throttling_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  max_api_requests: typing.Union[int, float],
  name: str,
  period: typing.Union[int, float],
  app_throttles: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2AppThrottles]] = None,
  description: str = None,
  id: str = None,
  max_app_requests: typing.Union[int, float] = None,
  max_ip_requests: typing.Union[int, float] = None,
  max_user_requests: typing.Union[int, float] = None,
  period_unit: str = None,
  type: str = None,
  user_throttles: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2UserThrottles]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxApiRequests">max_api_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.appThrottles">app_throttles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]</code> | app_throttles block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxAppRequests">max_app_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxIpRequests">max_ip_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxUserRequests">max_user_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.periodUnit">period_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.userThrottles">user_throttles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]</code> | user_throttles block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}.

---

##### `max_api_requests`<sup>Required</sup> <a name="max_api_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxApiRequests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}.

---

##### `app_throttles`<sup>Optional</sup> <a name="app_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.appThrottles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]

app_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#app_throttles ApigwThrottlingPolicyV2#app_throttles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_app_requests`<sup>Optional</sup> <a name="max_app_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxAppRequests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}.

---

##### `max_ip_requests`<sup>Optional</sup> <a name="max_ip_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxIpRequests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}.

---

##### `max_user_requests`<sup>Optional</sup> <a name="max_user_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.maxUserRequests"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}.

---

##### `period_unit`<sup>Optional</sup> <a name="period_unit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.periodUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}.

---

##### `user_throttles`<sup>Optional</sup> <a name="user_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.userThrottles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]

user_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#user_throttles ApigwThrottlingPolicyV2#user_throttles}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles">put_app_throttles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles">put_user_throttles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetAppThrottles">reset_app_throttles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxAppRequests">reset_max_app_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxIpRequests">reset_max_ip_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxUserRequests">reset_max_user_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetPeriodUnit">reset_period_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetUserThrottles">reset_user_throttles</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_throttles` <a name="put_app_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles"></a>

```python
def put_app_throttles(
  value: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2AppThrottles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]

---

##### `put_user_throttles` <a name="put_user_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles"></a>

```python
def put_user_throttles(
  value: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2UserThrottles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]

---

##### `reset_app_throttles` <a name="reset_app_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetAppThrottles"></a>

```python
def reset_app_throttles() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_app_requests` <a name="reset_max_app_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxAppRequests"></a>

```python
def reset_max_app_requests() -> None
```

##### `reset_max_ip_requests` <a name="reset_max_ip_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxIpRequests"></a>

```python
def reset_max_ip_requests() -> None
```

##### `reset_max_user_requests` <a name="reset_max_user_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxUserRequests"></a>

```python
def reset_max_user_requests() -> None
```

##### `reset_period_unit` <a name="reset_period_unit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetPeriodUnit"></a>

```python
def reset_period_unit() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_throttles` <a name="reset_user_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetUserThrottles"></a>

```python
def reset_user_throttles() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigwThrottlingPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigwThrottlingPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigwThrottlingPolicyV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigwThrottlingPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwThrottlingPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottles">app_throttles</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList">ApigwThrottlingPolicyV2AppThrottlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottles">user_throttles</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList">ApigwThrottlingPolicyV2UserThrottlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottlesInput">app_throttles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequestsInput">max_api_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequestsInput">max_app_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequestsInput">max_ip_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequestsInput">max_user_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnitInput">period_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottlesInput">user_throttles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequests">max_api_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequests">max_app_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequests">max_ip_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequests">max_user_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnit">period_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_throttles`<sup>Required</sup> <a name="app_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottles"></a>

```python
app_throttles: ApigwThrottlingPolicyV2AppThrottlesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList">ApigwThrottlingPolicyV2AppThrottlesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `user_throttles`<sup>Required</sup> <a name="user_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottles"></a>

```python
user_throttles: ApigwThrottlingPolicyV2UserThrottlesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList">ApigwThrottlingPolicyV2UserThrottlesList</a>

---

##### `app_throttles_input`<sup>Optional</sup> <a name="app_throttles_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottlesInput"></a>

```python
app_throttles_input: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2AppThrottles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `max_api_requests_input`<sup>Optional</sup> <a name="max_api_requests_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequestsInput"></a>

```python
max_api_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_app_requests_input`<sup>Optional</sup> <a name="max_app_requests_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequestsInput"></a>

```python
max_app_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ip_requests_input`<sup>Optional</sup> <a name="max_ip_requests_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequestsInput"></a>

```python
max_ip_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_requests_input`<sup>Optional</sup> <a name="max_user_requests_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequestsInput"></a>

```python
max_user_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_unit_input`<sup>Optional</sup> <a name="period_unit_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnitInput"></a>

```python
period_unit_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_throttles_input`<sup>Optional</sup> <a name="user_throttles_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottlesInput"></a>

```python
user_throttles_input: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2UserThrottles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `max_api_requests`<sup>Required</sup> <a name="max_api_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequests"></a>

```python
max_api_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_app_requests`<sup>Required</sup> <a name="max_app_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequests"></a>

```python
max_app_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ip_requests`<sup>Required</sup> <a name="max_ip_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequests"></a>

```python
max_ip_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_requests`<sup>Required</sup> <a name="max_user_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequests"></a>

```python
max_user_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_unit`<sup>Required</sup> <a name="period_unit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnit"></a>

```python
period_unit: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwThrottlingPolicyV2AppThrottles <a name="ApigwThrottlingPolicyV2AppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles(
  max_api_requests: typing.Union[int, float],
  throttling_object_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.maxApiRequests">max_api_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.throttlingObjectId">throttling_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}. |

---

##### `max_api_requests`<sup>Required</sup> <a name="max_api_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.maxApiRequests"></a>

```python
max_api_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `throttling_object_id`<sup>Required</sup> <a name="throttling_object_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.throttlingObjectId"></a>

```python
throttling_object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}.

---

### ApigwThrottlingPolicyV2Config <a name="ApigwThrottlingPolicyV2Config" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  max_api_requests: typing.Union[int, float],
  name: str,
  period: typing.Union[int, float],
  app_throttles: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2AppThrottles]] = None,
  description: str = None,
  id: str = None,
  max_app_requests: typing.Union[int, float] = None,
  max_ip_requests: typing.Union[int, float] = None,
  max_user_requests: typing.Union[int, float] = None,
  period_unit: str = None,
  type: str = None,
  user_throttles: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2UserThrottles]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxApiRequests">max_api_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.period">period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.appThrottles">app_throttles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]</code> | app_throttles block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxAppRequests">max_app_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxIpRequests">max_ip_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxUserRequests">max_user_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.periodUnit">period_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.userThrottles">user_throttles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]</code> | user_throttles block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}.

---

##### `max_api_requests`<sup>Required</sup> <a name="max_api_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxApiRequests"></a>

```python
max_api_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}.

---

##### `app_throttles`<sup>Optional</sup> <a name="app_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.appThrottles"></a>

```python
app_throttles: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2AppThrottles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]

app_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#app_throttles ApigwThrottlingPolicyV2#app_throttles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_app_requests`<sup>Optional</sup> <a name="max_app_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxAppRequests"></a>

```python
max_app_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}.

---

##### `max_ip_requests`<sup>Optional</sup> <a name="max_ip_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxIpRequests"></a>

```python
max_ip_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}.

---

##### `max_user_requests`<sup>Optional</sup> <a name="max_user_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxUserRequests"></a>

```python
max_user_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}.

---

##### `period_unit`<sup>Optional</sup> <a name="period_unit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.periodUnit"></a>

```python
period_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}.

---

##### `user_throttles`<sup>Optional</sup> <a name="user_throttles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.userThrottles"></a>

```python
user_throttles: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2UserThrottles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]

user_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#user_throttles ApigwThrottlingPolicyV2#user_throttles}

---

### ApigwThrottlingPolicyV2UserThrottles <a name="ApigwThrottlingPolicyV2UserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles(
  max_api_requests: typing.Union[int, float],
  throttling_object_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.maxApiRequests">max_api_requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.throttlingObjectId">throttling_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}. |

---

##### `max_api_requests`<sup>Required</sup> <a name="max_api_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.maxApiRequests"></a>

```python
max_api_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `throttling_object_id`<sup>Required</sup> <a name="throttling_object_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.throttlingObjectId"></a>

```python
throttling_object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwThrottlingPolicyV2AppThrottlesList <a name="ApigwThrottlingPolicyV2AppThrottlesList" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwThrottlingPolicyV2AppThrottlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2AppThrottles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]]

---


### ApigwThrottlingPolicyV2AppThrottlesOutputReference <a name="ApigwThrottlingPolicyV2AppThrottlesOutputReference" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectName">throttling_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequestsInput">max_api_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectIdInput">throttling_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequests">max_api_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectId">throttling_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `throttling_object_name`<sup>Required</sup> <a name="throttling_object_name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectName"></a>

```python
throttling_object_name: str
```

- *Type:* str

---

##### `max_api_requests_input`<sup>Optional</sup> <a name="max_api_requests_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequestsInput"></a>

```python
max_api_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_object_id_input`<sup>Optional</sup> <a name="throttling_object_id_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectIdInput"></a>

```python
throttling_object_id_input: str
```

- *Type:* str

---

##### `max_api_requests`<sup>Required</sup> <a name="max_api_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequests"></a>

```python
max_api_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_object_id`<sup>Required</sup> <a name="throttling_object_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectId"></a>

```python
throttling_object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwThrottlingPolicyV2AppThrottles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>]

---


### ApigwThrottlingPolicyV2UserThrottlesList <a name="ApigwThrottlingPolicyV2UserThrottlesList" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwThrottlingPolicyV2UserThrottlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwThrottlingPolicyV2UserThrottles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]]

---


### ApigwThrottlingPolicyV2UserThrottlesOutputReference <a name="ApigwThrottlingPolicyV2UserThrottlesOutputReference" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_throttling_policy_v2

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectName">throttling_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequestsInput">max_api_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectIdInput">throttling_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequests">max_api_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectId">throttling_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `throttling_object_name`<sup>Required</sup> <a name="throttling_object_name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectName"></a>

```python
throttling_object_name: str
```

- *Type:* str

---

##### `max_api_requests_input`<sup>Optional</sup> <a name="max_api_requests_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequestsInput"></a>

```python
max_api_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_object_id_input`<sup>Optional</sup> <a name="throttling_object_id_input" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectIdInput"></a>

```python
throttling_object_id_input: str
```

- *Type:* str

---

##### `max_api_requests`<sup>Required</sup> <a name="max_api_requests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequests"></a>

```python
max_api_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_object_id`<sup>Required</sup> <a name="throttling_object_id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectId"></a>

```python
throttling_object_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwThrottlingPolicyV2UserThrottles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>]

---



