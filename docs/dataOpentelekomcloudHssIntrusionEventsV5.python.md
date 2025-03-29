# `dataOpentelekomcloudHssIntrusionEventsV5` Submodule <a name="`dataOpentelekomcloudHssIntrusionEventsV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssIntrusionEventsV5 <a name="DataOpentelekomcloudHssIntrusionEventsV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5 opentelekomcloud_hss_intrusion_events_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  begin_time: str = None,
  container_name: str = None,
  days: typing.Union[int, float] = None,
  end_time: str = None,
  enterprise_project_id: str = None,
  event_types: typing.List[str] = None,
  handle_status: str = None,
  host_id: str = None,
  host_name: str = None,
  id: str = None,
  private_ip: str = None,
  severity: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.category">category</a></code> | <code>str</code> | Event category. Its value can be: host (host security event) or container (container security event). |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.beginTime">begin_time</a></code> | <code>str</code> | Customized start time of a segment. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Container instance name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.days">days</a></code> | <code>typing.Union[int, float]</code> | Number of days to be queried. This parameter is mutually exclusive with begin_time and end_time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Customized end time of a segment. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Enterprise project ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.eventTypes">event_types</a></code> | <code>typing.List[str]</code> | Intrusion types. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.handleStatus">handle_status</a></code> | <code>str</code> | Status. Possible values: unhandled, handled. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | Host ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.hostName">host_name</a></code> | <code>str</code> | Server name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#id DataOpentelekomcloudHssIntrusionEventsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Server IP address. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Threat level. Possible values: Security, Low, Medium, High, Critical. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.category"></a>

- *Type:* str

Event category. Its value can be: host (host security event) or container (container security event).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#category DataOpentelekomcloudHssIntrusionEventsV5#category}

---

##### `begin_time`<sup>Optional</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.beginTime"></a>

- *Type:* str

Customized start time of a segment.

The timestamp is accurate to seconds. The begin_time should be no more than two days earlier than the end_time. This parameter is mutually exclusive with the queried duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#begin_time DataOpentelekomcloudHssIntrusionEventsV5#begin_time}

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.containerName"></a>

- *Type:* str

Container instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#container_name DataOpentelekomcloudHssIntrusionEventsV5#container_name}

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.days"></a>

- *Type:* typing.Union[int, float]

Number of days to be queried. This parameter is mutually exclusive with begin_time and end_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#days DataOpentelekomcloudHssIntrusionEventsV5#days}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.endTime"></a>

- *Type:* str

Customized end time of a segment.

The timestamp is accurate to seconds. The begin_time should be no more than two days earlier than the end_time. This parameter is mutually exclusive with the queried duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#end_time DataOpentelekomcloudHssIntrusionEventsV5#end_time}

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.enterpriseProjectId"></a>

- *Type:* str

Enterprise project ID.

The value 0 indicates the default enterprise project. To query all enterprise projects, set this parameter to all_granted_eps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#enterprise_project_id DataOpentelekomcloudHssIntrusionEventsV5#enterprise_project_id}

---

##### `event_types`<sup>Optional</sup> <a name="event_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.eventTypes"></a>

- *Type:* typing.List[str]

Intrusion types.

Possible values include:
1001: Malware
1010: Rootkit
1011: Ransomware
1015: Web shell
1017: Reverse shell
2001: Common vulnerability exploit
3002: File privilege escalation
3003: Process privilege escalation
3004: Important file change
3005: File/Directory change
3007: Abnormal process behavior
3015: High-risk command execution
3018: Abnormal shell
3027: Suspicious crontab tasks
4002: Brute-force attack
4004: Abnormal login
4006: Invalid system account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#event_types DataOpentelekomcloudHssIntrusionEventsV5#event_types}

---

##### `handle_status`<sup>Optional</sup> <a name="handle_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.handleStatus"></a>

- *Type:* str

Status. Possible values: unhandled, handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#handle_status DataOpentelekomcloudHssIntrusionEventsV5#handle_status}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.hostId"></a>

- *Type:* str

Host ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#host_id DataOpentelekomcloudHssIntrusionEventsV5#host_id}

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.hostName"></a>

- *Type:* str

Server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#host_name DataOpentelekomcloudHssIntrusionEventsV5#host_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#id DataOpentelekomcloudHssIntrusionEventsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.privateIp"></a>

- *Type:* str

Server IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#private_ip DataOpentelekomcloudHssIntrusionEventsV5#private_ip}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.Initializer.parameter.severity"></a>

- *Type:* str

Threat level. Possible values: Security, Low, Medium, High, Critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#severity DataOpentelekomcloudHssIntrusionEventsV5#severity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetBeginTime">reset_begin_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetContainerName">reset_container_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetEnterpriseProjectId">reset_enterprise_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetEventTypes">reset_event_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetHandleStatus">reset_handle_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetSeverity">reset_severity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_begin_time` <a name="reset_begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetBeginTime"></a>

```python
def reset_begin_time() -> None
```

##### `reset_container_name` <a name="reset_container_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetContainerName"></a>

```python
def reset_container_name() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_enterprise_project_id` <a name="reset_enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetEnterpriseProjectId"></a>

```python
def reset_enterprise_project_id() -> None
```

##### `reset_event_types` <a name="reset_event_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetEventTypes"></a>

```python
def reset_event_types() -> None
```

##### `reset_handle_status` <a name="reset_handle_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetHandleStatus"></a>

```python
def reset_handle_status() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.resetSeverity"></a>

```python
def reset_severity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssIntrusionEventsV5 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudHssIntrusionEventsV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudHssIntrusionEventsV5 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudHssIntrusionEventsV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssIntrusionEventsV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.events">events</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList">DataOpentelekomcloudHssIntrusionEventsV5EventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.beginTimeInput">begin_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.enterpriseProjectIdInput">enterprise_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.eventTypesInput">event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.handleStatusInput">handle_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.beginTime">begin_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.eventTypes">event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.handleStatus">handle_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.severity">severity</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.events"></a>

```python
events: DataOpentelekomcloudHssIntrusionEventsV5EventsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList">DataOpentelekomcloudHssIntrusionEventsV5EventsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `begin_time_input`<sup>Optional</sup> <a name="begin_time_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.beginTimeInput"></a>

```python
begin_time_input: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `enterprise_project_id_input`<sup>Optional</sup> <a name="enterprise_project_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.enterpriseProjectIdInput"></a>

```python
enterprise_project_id_input: str
```

- *Type:* str

---

##### `event_types_input`<sup>Optional</sup> <a name="event_types_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.eventTypesInput"></a>

```python
event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `handle_status_input`<sup>Optional</sup> <a name="handle_status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.handleStatusInput"></a>

```python
handle_status_input: str
```

- *Type:* str

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `begin_time`<sup>Required</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.beginTime"></a>

```python
begin_time: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `event_types`<sup>Required</sup> <a name="event_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.eventTypes"></a>

```python
event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `handle_status`<sup>Required</sup> <a name="handle_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.handleStatus"></a>

```python
handle_status: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssIntrusionEventsV5Config <a name="DataOpentelekomcloudHssIntrusionEventsV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  category: str,
  begin_time: str = None,
  container_name: str = None,
  days: typing.Union[int, float] = None,
  end_time: str = None,
  enterprise_project_id: str = None,
  event_types: typing.List[str] = None,
  handle_status: str = None,
  host_id: str = None,
  host_name: str = None,
  id: str = None,
  private_ip: str = None,
  severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.category">category</a></code> | <code>str</code> | Event category. Its value can be: host (host security event) or container (container security event). |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.beginTime">begin_time</a></code> | <code>str</code> | Customized start time of a segment. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.containerName">container_name</a></code> | <code>str</code> | Container instance name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Number of days to be queried. This parameter is mutually exclusive with begin_time and end_time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.endTime">end_time</a></code> | <code>str</code> | Customized end time of a segment. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Enterprise project ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.eventTypes">event_types</a></code> | <code>typing.List[str]</code> | Intrusion types. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.handleStatus">handle_status</a></code> | <code>str</code> | Status. Possible values: unhandled, handled. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.hostId">host_id</a></code> | <code>str</code> | Host ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.hostName">host_name</a></code> | <code>str</code> | Server name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#id DataOpentelekomcloudHssIntrusionEventsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.privateIp">private_ip</a></code> | <code>str</code> | Server IP address. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.severity">severity</a></code> | <code>str</code> | Threat level. Possible values: Security, Low, Medium, High, Critical. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.category"></a>

```python
category: str
```

- *Type:* str

Event category. Its value can be: host (host security event) or container (container security event).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#category DataOpentelekomcloudHssIntrusionEventsV5#category}

---

##### `begin_time`<sup>Optional</sup> <a name="begin_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.beginTime"></a>

```python
begin_time: str
```

- *Type:* str

Customized start time of a segment.

The timestamp is accurate to seconds. The begin_time should be no more than two days earlier than the end_time. This parameter is mutually exclusive with the queried duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#begin_time DataOpentelekomcloudHssIntrusionEventsV5#begin_time}

---

##### `container_name`<sup>Optional</sup> <a name="container_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Container instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#container_name DataOpentelekomcloudHssIntrusionEventsV5#container_name}

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days to be queried. This parameter is mutually exclusive with begin_time and end_time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#days DataOpentelekomcloudHssIntrusionEventsV5#days}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Customized end time of a segment.

The timestamp is accurate to seconds. The begin_time should be no more than two days earlier than the end_time. This parameter is mutually exclusive with the queried duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#end_time DataOpentelekomcloudHssIntrusionEventsV5#end_time}

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

Enterprise project ID.

The value 0 indicates the default enterprise project. To query all enterprise projects, set this parameter to all_granted_eps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#enterprise_project_id DataOpentelekomcloudHssIntrusionEventsV5#enterprise_project_id}

---

##### `event_types`<sup>Optional</sup> <a name="event_types" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.eventTypes"></a>

```python
event_types: typing.List[str]
```

- *Type:* typing.List[str]

Intrusion types.

Possible values include:
1001: Malware
1010: Rootkit
1011: Ransomware
1015: Web shell
1017: Reverse shell
2001: Common vulnerability exploit
3002: File privilege escalation
3003: Process privilege escalation
3004: Important file change
3005: File/Directory change
3007: Abnormal process behavior
3015: High-risk command execution
3018: Abnormal shell
3027: Suspicious crontab tasks
4002: Brute-force attack
4004: Abnormal login
4006: Invalid system account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#event_types DataOpentelekomcloudHssIntrusionEventsV5#event_types}

---

##### `handle_status`<sup>Optional</sup> <a name="handle_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.handleStatus"></a>

```python
handle_status: str
```

- *Type:* str

Status. Possible values: unhandled, handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#handle_status DataOpentelekomcloudHssIntrusionEventsV5#handle_status}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

Host ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#host_id DataOpentelekomcloudHssIntrusionEventsV5#host_id}

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Server name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#host_name DataOpentelekomcloudHssIntrusionEventsV5#host_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#id DataOpentelekomcloudHssIntrusionEventsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Server IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#private_ip DataOpentelekomcloudHssIntrusionEventsV5#private_ip}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Config.property.severity"></a>

```python
severity: str
```

- *Type:* str

Threat level. Possible values: Security, Low, Medium, High, Critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/data-sources/hss_intrusion_events_v5#severity DataOpentelekomcloudHssIntrusionEventsV5#severity}

---

### DataOpentelekomcloudHssIntrusionEventsV5Events <a name="DataOpentelekomcloudHssIntrusionEventsV5Events" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Events"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Events.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Events()
```


### DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct()
```


### DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct()
```


### DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct()
```


### DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo()
```


### DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fdCount">fd_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fdInfo">fd_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAction">file_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAlias">file_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAtime">file_atime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAttr">file_attr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileChangeAttr">file_change_attr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileContent">file_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileCtime">file_ctime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileDesc">file_desc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileHash">file_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileKeyWord">file_key_word</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileMd5">file_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileMtime">file_mtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileNewPath">file_new_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileOperation">file_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileSha256">file_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileSize">file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileType">file_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.isDir">is_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fd_count`<sup>Required</sup> <a name="fd_count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fdCount"></a>

```python
fd_count: str
```

- *Type:* str

---

##### `fd_info`<sup>Required</sup> <a name="fd_info" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fdInfo"></a>

```python
fd_info: str
```

- *Type:* str

---

##### `file_action`<sup>Required</sup> <a name="file_action" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAction"></a>

```python
file_action: str
```

- *Type:* str

---

##### `file_alias`<sup>Required</sup> <a name="file_alias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAlias"></a>

```python
file_alias: str
```

- *Type:* str

---

##### `file_atime`<sup>Required</sup> <a name="file_atime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAtime"></a>

```python
file_atime: str
```

- *Type:* str

---

##### `file_attr`<sup>Required</sup> <a name="file_attr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileAttr"></a>

```python
file_attr: str
```

- *Type:* str

---

##### `file_change_attr`<sup>Required</sup> <a name="file_change_attr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileChangeAttr"></a>

```python
file_change_attr: str
```

- *Type:* str

---

##### `file_content`<sup>Required</sup> <a name="file_content" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileContent"></a>

```python
file_content: str
```

- *Type:* str

---

##### `file_ctime`<sup>Required</sup> <a name="file_ctime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileCtime"></a>

```python
file_ctime: str
```

- *Type:* str

---

##### `file_desc`<sup>Required</sup> <a name="file_desc" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileDesc"></a>

```python
file_desc: str
```

- *Type:* str

---

##### `file_hash`<sup>Required</sup> <a name="file_hash" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileHash"></a>

```python
file_hash: str
```

- *Type:* str

---

##### `file_key_word`<sup>Required</sup> <a name="file_key_word" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileKeyWord"></a>

```python
file_key_word: str
```

- *Type:* str

---

##### `file_md5`<sup>Required</sup> <a name="file_md5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileMd5"></a>

```python
file_md5: str
```

- *Type:* str

---

##### `file_mtime`<sup>Required</sup> <a name="file_mtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileMtime"></a>

```python
file_mtime: str
```

- *Type:* str

---

##### `file_new_path`<sup>Required</sup> <a name="file_new_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileNewPath"></a>

```python
file_new_path: str
```

- *Type:* str

---

##### `file_operation`<sup>Required</sup> <a name="file_operation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileOperation"></a>

```python
file_operation: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `file_sha256`<sup>Required</sup> <a name="file_sha256" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileSha256"></a>

```python
file_sha256: str
```

- *Type:* str

---

##### `file_size`<sup>Required</sup> <a name="file_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileSize"></a>

```python
file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_type`<sup>Required</sup> <a name="file_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.fileType"></a>

```python
file_type: str
```

- *Type:* str

---

##### `is_dir`<sup>Required</sup> <a name="is_dir" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.isDir"></a>

```python
is_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStruct</a>

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsList <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.fileAttr">file_attr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.fileHash">file_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.hash">hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.isParent">is_parent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.keyword">keyword</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.loginIp">login_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.loginUserName">login_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.processPid">process_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `file_attr`<sup>Required</sup> <a name="file_attr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.fileAttr"></a>

```python
file_attr: str
```

- *Type:* str

---

##### `file_hash`<sup>Required</sup> <a name="file_hash" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.fileHash"></a>

```python
file_hash: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.hash"></a>

```python
hash: str
```

- *Type:* str

---

##### `is_parent`<sup>Required</sup> <a name="is_parent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.isParent"></a>

```python
is_parent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

---

##### `login_ip`<sup>Required</sup> <a name="login_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.loginIp"></a>

```python
login_ip: str
```

- *Type:* str

---

##### `login_user_name`<sup>Required</sup> <a name="login_user_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.loginUserName"></a>

```python
login_user_name: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `process_pid`<sup>Required</sup> <a name="process_pid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.processPid"></a>

```python
process_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStruct</a>

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.agentStatus">agent_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.assetValue">asset_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.attackPhase">attack_phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.attackTag">attack_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventClassId">event_class_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventDetails">event_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventType">event_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.fileInfoList">file_info_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handleMethod">handle_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handleStatus">handle_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handleTime">handle_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.hostStatus">host_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.occurTime">occur_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.operateAcceptList">operate_accept_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.operateDetailList">operate_detail_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.processInfoList">process_info_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.protectStatus">protect_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.recommendation">recommendation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.resourceInfo">resource_info</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList">DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.userInfoList">user_info_list</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Events">DataOpentelekomcloudHssIntrusionEventsV5Events</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_status`<sup>Required</sup> <a name="agent_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.agentStatus"></a>

```python
agent_status: str
```

- *Type:* str

---

##### `asset_value`<sup>Required</sup> <a name="asset_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.assetValue"></a>

```python
asset_value: str
```

- *Type:* str

---

##### `attack_phase`<sup>Required</sup> <a name="attack_phase" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.attackPhase"></a>

```python
attack_phase: str
```

- *Type:* str

---

##### `attack_tag`<sup>Required</sup> <a name="attack_tag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.attackTag"></a>

```python
attack_tag: str
```

- *Type:* str

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `event_class_id`<sup>Required</sup> <a name="event_class_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventClassId"></a>

```python
event_class_id: str
```

- *Type:* str

---

##### `event_details`<sup>Required</sup> <a name="event_details" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventDetails"></a>

```python
event_details: str
```

- *Type:* str

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.eventType"></a>

```python
event_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_info_list`<sup>Required</sup> <a name="file_info_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.fileInfoList"></a>

```python
file_info_list: DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsFileInfoListStructList</a>

---

##### `handle_method`<sup>Required</sup> <a name="handle_method" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handleMethod"></a>

```python
handle_method: str
```

- *Type:* str

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `handle_status`<sup>Required</sup> <a name="handle_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handleStatus"></a>

```python
handle_status: str
```

- *Type:* str

---

##### `handle_time`<sup>Required</sup> <a name="handle_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.handleTime"></a>

```python
handle_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `host_status`<sup>Required</sup> <a name="host_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.hostStatus"></a>

```python
host_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `occur_time`<sup>Required</sup> <a name="occur_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.occurTime"></a>

```python
occur_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operate_accept_list`<sup>Required</sup> <a name="operate_accept_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.operateAcceptList"></a>

```python
operate_accept_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operate_detail_list`<sup>Required</sup> <a name="operate_detail_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.operateDetailList"></a>

```python
operate_detail_list: DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsOperateDetailListStructList</a>

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `process_info_list`<sup>Required</sup> <a name="process_info_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.processInfoList"></a>

```python
process_info_list: DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList</a>

---

##### `protect_status`<sup>Required</sup> <a name="protect_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.protectStatus"></a>

```python
protect_status: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.recommendation"></a>

```python
recommendation: str
```

- *Type:* str

---

##### `resource_info`<sup>Required</sup> <a name="resource_info" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.resourceInfo"></a>

```python
resource_info: DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList">DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `user_info_list`<sup>Required</sup> <a name="user_info_list" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.userInfoList"></a>

```python
user_info_list: DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList">DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudHssIntrusionEventsV5Events
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5Events">DataOpentelekomcloudHssIntrusionEventsV5Events</a>

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessCmdline">child_process_cmdline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessEgid">child_process_egid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessEuid">child_process_euid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessFilename">child_process_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessGid">child_process_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessName">child_process_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessPath">child_process_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessPid">child_process_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessStartTime">child_process_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessUid">child_process_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.escapeCmd">escape_cmd</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.escapeMode">escape_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessCmdline">parent_process_cmdline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessEgid">parent_process_egid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessEuid">parent_process_euid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessFilename">parent_process_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessGid">parent_process_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessName">parent_process_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessPath">parent_process_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessPid">parent_process_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessStartTime">parent_process_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessUid">parent_process_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processCmdline">process_cmdline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processEgid">process_egid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processEuid">process_euid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processFilename">process_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processGid">process_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processHash">process_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processName">process_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processPath">process_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processPid">process_pid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processStartTime">process_start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processUid">process_uid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processUsername">process_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.virtCmd">virt_cmd</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.virtProcessName">virt_process_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_process_cmdline`<sup>Required</sup> <a name="child_process_cmdline" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessCmdline"></a>

```python
child_process_cmdline: str
```

- *Type:* str

---

##### `child_process_egid`<sup>Required</sup> <a name="child_process_egid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessEgid"></a>

```python
child_process_egid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_process_euid`<sup>Required</sup> <a name="child_process_euid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessEuid"></a>

```python
child_process_euid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_process_filename`<sup>Required</sup> <a name="child_process_filename" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessFilename"></a>

```python
child_process_filename: str
```

- *Type:* str

---

##### `child_process_gid`<sup>Required</sup> <a name="child_process_gid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessGid"></a>

```python
child_process_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_process_name`<sup>Required</sup> <a name="child_process_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessName"></a>

```python
child_process_name: str
```

- *Type:* str

---

##### `child_process_path`<sup>Required</sup> <a name="child_process_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessPath"></a>

```python
child_process_path: str
```

- *Type:* str

---

##### `child_process_pid`<sup>Required</sup> <a name="child_process_pid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessPid"></a>

```python
child_process_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_process_start_time`<sup>Required</sup> <a name="child_process_start_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessStartTime"></a>

```python
child_process_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_process_uid`<sup>Required</sup> <a name="child_process_uid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.childProcessUid"></a>

```python
child_process_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `escape_cmd`<sup>Required</sup> <a name="escape_cmd" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.escapeCmd"></a>

```python
escape_cmd: str
```

- *Type:* str

---

##### `escape_mode`<sup>Required</sup> <a name="escape_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.escapeMode"></a>

```python
escape_mode: str
```

- *Type:* str

---

##### `parent_process_cmdline`<sup>Required</sup> <a name="parent_process_cmdline" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessCmdline"></a>

```python
parent_process_cmdline: str
```

- *Type:* str

---

##### `parent_process_egid`<sup>Required</sup> <a name="parent_process_egid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessEgid"></a>

```python
parent_process_egid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_process_euid`<sup>Required</sup> <a name="parent_process_euid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessEuid"></a>

```python
parent_process_euid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_process_filename`<sup>Required</sup> <a name="parent_process_filename" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessFilename"></a>

```python
parent_process_filename: str
```

- *Type:* str

---

##### `parent_process_gid`<sup>Required</sup> <a name="parent_process_gid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessGid"></a>

```python
parent_process_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_process_name`<sup>Required</sup> <a name="parent_process_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessName"></a>

```python
parent_process_name: str
```

- *Type:* str

---

##### `parent_process_path`<sup>Required</sup> <a name="parent_process_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessPath"></a>

```python
parent_process_path: str
```

- *Type:* str

---

##### `parent_process_pid`<sup>Required</sup> <a name="parent_process_pid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessPid"></a>

```python
parent_process_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_process_start_time`<sup>Required</sup> <a name="parent_process_start_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessStartTime"></a>

```python
parent_process_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_process_uid`<sup>Required</sup> <a name="parent_process_uid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.parentProcessUid"></a>

```python
parent_process_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_cmdline`<sup>Required</sup> <a name="process_cmdline" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processCmdline"></a>

```python
process_cmdline: str
```

- *Type:* str

---

##### `process_egid`<sup>Required</sup> <a name="process_egid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processEgid"></a>

```python
process_egid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_euid`<sup>Required</sup> <a name="process_euid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processEuid"></a>

```python
process_euid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_filename`<sup>Required</sup> <a name="process_filename" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processFilename"></a>

```python
process_filename: str
```

- *Type:* str

---

##### `process_gid`<sup>Required</sup> <a name="process_gid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processGid"></a>

```python
process_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_hash`<sup>Required</sup> <a name="process_hash" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processHash"></a>

```python
process_hash: str
```

- *Type:* str

---

##### `process_name`<sup>Required</sup> <a name="process_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processName"></a>

```python
process_name: str
```

- *Type:* str

---

##### `process_path`<sup>Required</sup> <a name="process_path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processPath"></a>

```python
process_path: str
```

- *Type:* str

---

##### `process_pid`<sup>Required</sup> <a name="process_pid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processPid"></a>

```python
process_pid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_start_time`<sup>Required</sup> <a name="process_start_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processStartTime"></a>

```python
process_start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_uid`<sup>Required</sup> <a name="process_uid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processUid"></a>

```python
process_uid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_username`<sup>Required</sup> <a name="process_username" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.processUsername"></a>

```python
process_username: str
```

- *Type:* str

---

##### `virt_cmd`<sup>Required</sup> <a name="virt_cmd" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.virtCmd"></a>

```python
virt_cmd: str
```

- *Type:* str

---

##### `virt_process_name`<sup>Required</sup> <a name="virt_process_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.virtProcessName"></a>

```python
virt_process_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsProcessInfoListStruct</a>

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.ecsId">ecs_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.hostAttr">host_attr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.microservice">microservice</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osBit">os_bit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.sysArch">sys_arch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.vmName">vm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.vmUuid">vm_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo">DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `ecs_id`<sup>Required</sup> <a name="ecs_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.ecsId"></a>

```python
ecs_id: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `host_attr`<sup>Required</sup> <a name="host_attr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.hostAttr"></a>

```python
host_attr: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `microservice`<sup>Required</sup> <a name="microservice" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.microservice"></a>

```python
microservice: str
```

- *Type:* str

---

##### `os_bit`<sup>Required</sup> <a name="os_bit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osBit"></a>

```python
os_bit: str
```

- *Type:* str

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `sys_arch`<sup>Required</sup> <a name="sys_arch" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.sysArch"></a>

```python
sys_arch: str
```

- *Type:* str

---

##### `vm_name`<sup>Required</sup> <a name="vm_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.vmName"></a>

```python
vm_name: str
```

- *Type:* str

---

##### `vm_uuid`<sup>Required</sup> <a name="vm_uuid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.vmUuid"></a>

```python
vm_uuid: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo">DataOpentelekomcloudHssIntrusionEventsV5EventsResourceInfo</a>

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference <a name="DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_hss_intrusion_events_v5

dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginFailCount">login_fail_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginIp">login_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginLastTime">login_last_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginMode">login_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdHash">pwd_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdMaxDays">pwd_max_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdMinDays">pwd_min_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdUsedDays">pwd_used_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdWarnLeftDays">pwd_warn_left_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdWithFuzzing">pwd_with_fuzzing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.servicePort">service_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userGid">user_gid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userGroupName">user_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userHomeDir">user_home_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userId">user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `login_fail_count`<sup>Required</sup> <a name="login_fail_count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginFailCount"></a>

```python
login_fail_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `login_ip`<sup>Required</sup> <a name="login_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginIp"></a>

```python
login_ip: str
```

- *Type:* str

---

##### `login_last_time`<sup>Required</sup> <a name="login_last_time" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginLastTime"></a>

```python
login_last_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.loginMode"></a>

```python
login_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pwd_hash`<sup>Required</sup> <a name="pwd_hash" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdHash"></a>

```python
pwd_hash: str
```

- *Type:* str

---

##### `pwd_max_days`<sup>Required</sup> <a name="pwd_max_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdMaxDays"></a>

```python
pwd_max_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pwd_min_days`<sup>Required</sup> <a name="pwd_min_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdMinDays"></a>

```python
pwd_min_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pwd_used_days`<sup>Required</sup> <a name="pwd_used_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdUsedDays"></a>

```python
pwd_used_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pwd_warn_left_days`<sup>Required</sup> <a name="pwd_warn_left_days" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdWarnLeftDays"></a>

```python
pwd_warn_left_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pwd_with_fuzzing`<sup>Required</sup> <a name="pwd_with_fuzzing" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.pwdWithFuzzing"></a>

```python
pwd_with_fuzzing: str
```

- *Type:* str

---

##### `service_port`<sup>Required</sup> <a name="service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.servicePort"></a>

```python
service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `user_gid`<sup>Required</sup> <a name="user_gid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userGid"></a>

```python
user_gid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_group_name`<sup>Required</sup> <a name="user_group_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userGroupName"></a>

```python
user_group_name: str
```

- *Type:* str

---

##### `user_home_dir`<sup>Required</sup> <a name="user_home_dir" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userHomeDir"></a>

```python
user_home_dir: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userId"></a>

```python
user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssIntrusionEventsV5.DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct">DataOpentelekomcloudHssIntrusionEventsV5EventsUserInfoListStruct</a>

---



