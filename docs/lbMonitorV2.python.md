# `lbMonitorV2` Submodule <a name="`lbMonitorV2` Submodule" id="@cdktf/provider-opentelekomcloud.lbMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbMonitorV2 <a name="LbMonitorV2" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2 opentelekomcloud_lb_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delay: typing.Union[int, float],
  max_retries: typing.Union[int, float],
  pool_id: str,
  timeout: typing.Union[int, float],
  type: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  domain_name: str = None,
  expected_codes: str = None,
  http_method: str = None,
  id: str = None,
  monitor_port: typing.Union[int, float] = None,
  name: str = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: LbMonitorV2Timeouts = None,
  url_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.delay">delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#delay LbMonitorV2#delay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#max_retries LbMonitorV2#max_retries}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#pool_id LbMonitorV2#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#timeout LbMonitorV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#type LbMonitorV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#admin_state_up LbMonitorV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#domain_name LbMonitorV2#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.expectedCodes">expected_codes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#expected_codes LbMonitorV2#expected_codes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#http_method LbMonitorV2#http_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#id LbMonitorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.monitorPort">monitor_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#monitor_port LbMonitorV2#monitor_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#name LbMonitorV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#region LbMonitorV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#tenant_id LbMonitorV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.urlPath">url_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#url_path LbMonitorV2#url_path}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.delay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#delay LbMonitorV2#delay}.

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#max_retries LbMonitorV2#max_retries}.

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.poolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#pool_id LbMonitorV2#pool_id}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#timeout LbMonitorV2#timeout}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#type LbMonitorV2#type}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#admin_state_up LbMonitorV2#admin_state_up}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#domain_name LbMonitorV2#domain_name}.

---

##### `expected_codes`<sup>Optional</sup> <a name="expected_codes" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.expectedCodes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#expected_codes LbMonitorV2#expected_codes}.

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#http_method LbMonitorV2#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#id LbMonitorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor_port`<sup>Optional</sup> <a name="monitor_port" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.monitorPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#monitor_port LbMonitorV2#monitor_port}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#name LbMonitorV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#region LbMonitorV2#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#tenant_id LbMonitorV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#timeouts LbMonitorV2#timeouts}

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.Initializer.parameter.urlPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#url_path LbMonitorV2#url_path}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetExpectedCodes">reset_expected_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetHttpMethod">reset_http_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetMonitorPort">reset_monitor_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetUrlPath">reset_url_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#create LbMonitorV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#delete LbMonitorV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#update LbMonitorV2#update}.

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_expected_codes` <a name="reset_expected_codes" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetExpectedCodes"></a>

```python
def reset_expected_codes() -> None
```

##### `reset_http_method` <a name="reset_http_method" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetHttpMethod"></a>

```python
def reset_http_method() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monitor_port` <a name="reset_monitor_port" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetMonitorPort"></a>

```python
def reset_monitor_port() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_url_path` <a name="reset_url_path" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.resetUrlPath"></a>

```python
def reset_url_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbMonitorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbMonitorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbMonitorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference">LbMonitorV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.delayInput">delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.expectedCodesInput">expected_codes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.monitorPortInput">monitor_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.urlPathInput">url_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.expectedCodes">expected_codes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.monitorPort">monitor_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeouts"></a>

```python
timeouts: LbMonitorV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference">LbMonitorV2TimeoutsOutputReference</a>

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.delayInput"></a>

```python
delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `expected_codes_input`<sup>Optional</sup> <a name="expected_codes_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.expectedCodesInput"></a>

```python
expected_codes_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_port_input`<sup>Optional</sup> <a name="monitor_port_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.monitorPortInput"></a>

```python
monitor_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbMonitorV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `url_path_input`<sup>Optional</sup> <a name="url_path_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.urlPathInput"></a>

```python
url_path_input: str
```

- *Type:* str

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `expected_codes`<sup>Required</sup> <a name="expected_codes" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.expectedCodes"></a>

```python
expected_codes: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_port`<sup>Required</sup> <a name="monitor_port" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.monitorPort"></a>

```python
monitor_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbMonitorV2Config <a name="LbMonitorV2Config" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delay: typing.Union[int, float],
  max_retries: typing.Union[int, float],
  pool_id: str,
  timeout: typing.Union[int, float],
  type: str,
  admin_state_up: typing.Union[bool, IResolvable] = None,
  domain_name: str = None,
  expected_codes: str = None,
  http_method: str = None,
  id: str = None,
  monitor_port: typing.Union[int, float] = None,
  name: str = None,
  region: str = None,
  tenant_id: str = None,
  timeouts: LbMonitorV2Timeouts = None,
  url_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.delay">delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#delay LbMonitorV2#delay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#max_retries LbMonitorV2#max_retries}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#pool_id LbMonitorV2#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#timeout LbMonitorV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#type LbMonitorV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#admin_state_up LbMonitorV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#domain_name LbMonitorV2#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.expectedCodes">expected_codes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#expected_codes LbMonitorV2#expected_codes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#http_method LbMonitorV2#http_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#id LbMonitorV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.monitorPort">monitor_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#monitor_port LbMonitorV2#monitor_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#name LbMonitorV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#region LbMonitorV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#tenant_id LbMonitorV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.urlPath">url_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#url_path LbMonitorV2#url_path}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.delay"></a>

```python
delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#delay LbMonitorV2#delay}.

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#max_retries LbMonitorV2#max_retries}.

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#pool_id LbMonitorV2#pool_id}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#timeout LbMonitorV2#timeout}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#type LbMonitorV2#type}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#admin_state_up LbMonitorV2#admin_state_up}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#domain_name LbMonitorV2#domain_name}.

---

##### `expected_codes`<sup>Optional</sup> <a name="expected_codes" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.expectedCodes"></a>

```python
expected_codes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#expected_codes LbMonitorV2#expected_codes}.

---

##### `http_method`<sup>Optional</sup> <a name="http_method" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#http_method LbMonitorV2#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#id LbMonitorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor_port`<sup>Optional</sup> <a name="monitor_port" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.monitorPort"></a>

```python
monitor_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#monitor_port LbMonitorV2#monitor_port}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#name LbMonitorV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#region LbMonitorV2#region}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#tenant_id LbMonitorV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.timeouts"></a>

```python
timeouts: LbMonitorV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#timeouts LbMonitorV2#timeouts}

---

##### `url_path`<sup>Optional</sup> <a name="url_path" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Config.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#url_path LbMonitorV2#url_path}.

---

### LbMonitorV2Timeouts <a name="LbMonitorV2Timeouts" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#create LbMonitorV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#delete LbMonitorV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#update LbMonitorV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#create LbMonitorV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#delete LbMonitorV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/lb_monitor_v2#update LbMonitorV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbMonitorV2TimeoutsOutputReference <a name="LbMonitorV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_monitor_v2

lbMonitorV2.LbMonitorV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbMonitorV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV2.LbMonitorV2Timeouts">LbMonitorV2Timeouts</a>]

---



