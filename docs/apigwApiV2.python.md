# `apigwApiV2` Submodule <a name="`apigwApiV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwApiV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwApiV2 <a name="ApigwApiV2" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2 opentelekomcloud_apigw_api_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2(
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
  group_id: str,
  name: str,
  request_method: str,
  request_protocol: str,
  request_uri: str,
  type: str,
  authorizer_id: str = None,
  backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2BackendParams]] = None,
  body_description: str = None,
  cors: typing.Union[bool, IResolvable] = None,
  description: str = None,
  failure_response: str = None,
  func_graph: ApigwApiV2FuncGraph = None,
  func_graph_policy: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicy]] = None,
  http: ApigwApiV2Http = None,
  http_policy: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicy]] = None,
  id: str = None,
  match_mode: str = None,
  mock: ApigwApiV2Mock = None,
  mock_policy: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicy]] = None,
  region: str = None,
  request_params: typing.Union[IResolvable, typing.List[ApigwApiV2RequestParams]] = None,
  response_id: str = None,
  security_authentication_enabled: typing.Union[bool, IResolvable] = None,
  security_authentication_type: str = None,
  success_response: str = None,
  tags: typing.List[str] = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestMethod">request_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestProtocol">request_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestUri">request_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.backendParams">backend_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.bodyDescription">body_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.cors">cors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.failureResponse">failure_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.funcGraph">func_graph</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | func_graph block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.funcGraphPolicy">func_graph_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]</code> | func_graph_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.http">http</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | http block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.httpPolicy">http_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]</code> | http_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#id ApigwApiV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.matchMode">match_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.mock">mock</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | mock block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.mockPolicy">mock_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]</code> | mock_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#region ApigwApiV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestParams">request_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]</code> | request_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.responseId">response_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.securityAuthenticationEnabled">security_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.securityAuthenticationType">security_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.successResponse">success_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}.

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `request_protocol`<sup>Required</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.authorizerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backend_params`<sup>Optional</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.backendParams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `body_description`<sup>Optional</sup> <a name="body_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.bodyDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.cors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `failure_response`<sup>Optional</sup> <a name="failure_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.failureResponse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}.

---

##### `func_graph`<sup>Optional</sup> <a name="func_graph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.funcGraph"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

func_graph block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#func_graph ApigwApiV2#func_graph}

---

##### `func_graph_policy`<sup>Optional</sup> <a name="func_graph_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.funcGraphPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]

func_graph_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#func_graph_policy ApigwApiV2#func_graph_policy}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.http"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#http ApigwApiV2#http}

---

##### `http_policy`<sup>Optional</sup> <a name="http_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.httpPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]

http_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#http_policy ApigwApiV2#http_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#id ApigwApiV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_mode`<sup>Optional</sup> <a name="match_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.matchMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}.

---

##### `mock`<sup>Optional</sup> <a name="mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.mock"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

mock block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#mock ApigwApiV2#mock}

---

##### `mock_policy`<sup>Optional</sup> <a name="mock_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.mockPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]

mock_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#mock_policy ApigwApiV2#mock_policy}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#region ApigwApiV2#region}.

---

##### `request_params`<sup>Optional</sup> <a name="request_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.requestParams"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]

request_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_params ApigwApiV2#request_params}

---

##### `response_id`<sup>Optional</sup> <a name="response_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.responseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}.

---

##### `security_authentication_enabled`<sup>Optional</sup> <a name="security_authentication_enabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.securityAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}.

---

##### `security_authentication_type`<sup>Optional</sup> <a name="security_authentication_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.securityAuthenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}.

---

##### `success_response`<sup>Optional</sup> <a name="success_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.successResponse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams">put_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph">put_func_graph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy">put_func_graph_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp">put_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy">put_http_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock">put_mock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy">put_mock_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams">put_request_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBackendParams">reset_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBodyDescription">reset_body_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFailureResponse">reset_failure_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraph">reset_func_graph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraphPolicy">reset_func_graph_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttp">reset_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttpPolicy">reset_http_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMatchMode">reset_match_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMock">reset_mock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMockPolicy">reset_mock_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRequestParams">reset_request_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetResponseId">reset_response_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationEnabled">reset_security_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationType">reset_security_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSuccessResponse">reset_success_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend_params` <a name="put_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams"></a>

```python
def put_backend_params(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2BackendParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putBackendParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]

---

##### `put_func_graph` <a name="put_func_graph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph"></a>

```python
def put_func_graph(
  function_urn: str,
  authorizer_id: str = None,
  description: str = None,
  invocation_type: str = None,
  network_type: str = None,
  timeout: typing.Union[int, float] = None,
  version: str = None
) -> None
```

###### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.functionUrn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}.

---

###### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.authorizerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

###### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.invocationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}.

---

###### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.networkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraph.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

##### `put_func_graph_policy` <a name="put_func_graph_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy"></a>

```python
def put_func_graph_policy(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putFuncGraphPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]

---

##### `put_http` <a name="put_http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp"></a>

```python
def put_http(
  request_method: str,
  request_uri: str,
  authorizer_id: str = None,
  description: str = None,
  request_protocol: str = None,
  retry_count: typing.Union[int, float] = None,
  ssl_enable: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  url_domain: str = None,
  version: str = None,
  vpc_channel_id: str = None,
  vpc_channel_proxy_host: str = None
) -> None
```

###### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.requestMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

###### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.requestUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

###### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.authorizerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

###### `request_protocol`<sup>Optional</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.requestProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

###### `retry_count`<sup>Optional</sup> <a name="retry_count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.retryCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}.

---

###### `ssl_enable`<sup>Optional</sup> <a name="ssl_enable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.sslEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

###### `url_domain`<sup>Optional</sup> <a name="url_domain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.urlDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

###### `vpc_channel_id`<sup>Optional</sup> <a name="vpc_channel_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.vpcChannelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}.

---

###### `vpc_channel_proxy_host`<sup>Optional</sup> <a name="vpc_channel_proxy_host" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttp.parameter.vpcChannelProxyHost"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}.

---

##### `put_http_policy` <a name="put_http_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy"></a>

```python
def put_http_policy(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putHttpPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]

---

##### `put_mock` <a name="put_mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock"></a>

```python
def put_mock(
  authorizer_id: str = None,
  description: str = None,
  response: str = None,
  version: str = None
) -> None
```

###### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock.parameter.authorizerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock.parameter.response"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response ApigwApiV2#response}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMock.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

##### `put_mock_policy` <a name="put_mock_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy"></a>

```python
def put_mock_policy(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putMockPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]

---

##### `put_request_params` <a name="put_request_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams"></a>

```python
def put_request_params(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2RequestParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.putRequestParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]

---

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_backend_params` <a name="reset_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBackendParams"></a>

```python
def reset_backend_params() -> None
```

##### `reset_body_description` <a name="reset_body_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetBodyDescription"></a>

```python
def reset_body_description() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_failure_response` <a name="reset_failure_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFailureResponse"></a>

```python
def reset_failure_response() -> None
```

##### `reset_func_graph` <a name="reset_func_graph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraph"></a>

```python
def reset_func_graph() -> None
```

##### `reset_func_graph_policy` <a name="reset_func_graph_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetFuncGraphPolicy"></a>

```python
def reset_func_graph_policy() -> None
```

##### `reset_http` <a name="reset_http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttp"></a>

```python
def reset_http() -> None
```

##### `reset_http_policy` <a name="reset_http_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetHttpPolicy"></a>

```python
def reset_http_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_match_mode` <a name="reset_match_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMatchMode"></a>

```python
def reset_match_mode() -> None
```

##### `reset_mock` <a name="reset_mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMock"></a>

```python
def reset_mock() -> None
```

##### `reset_mock_policy` <a name="reset_mock_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetMockPolicy"></a>

```python
def reset_mock_policy() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_request_params` <a name="reset_request_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetRequestParams"></a>

```python
def reset_request_params() -> None
```

##### `reset_response_id` <a name="reset_response_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetResponseId"></a>

```python
def reset_response_id() -> None
```

##### `reset_security_authentication_enabled` <a name="reset_security_authentication_enabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationEnabled"></a>

```python
def reset_security_authentication_enabled() -> None
```

##### `reset_security_authentication_type` <a name="reset_security_authentication_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSecurityAuthenticationType"></a>

```python
def reset_security_authentication_type() -> None
```

##### `reset_success_response` <a name="reset_success_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetSuccessResponse"></a>

```python
def reset_success_response() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigwApiV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigwApiV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigwApiV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigwApiV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwApiV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParams">backend_params</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList">ApigwApiV2BackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraph">func_graph</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference">ApigwApiV2FuncGraphOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicy">func_graph_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList">ApigwApiV2FuncGraphPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.http">http</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference">ApigwApiV2HttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicy">http_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList">ApigwApiV2HttpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mock">mock</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference">ApigwApiV2MockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicy">mock_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList">ApigwApiV2MockPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.registeredAt">registered_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParams">request_params</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList">ApigwApiV2RequestParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParamsInput">backend_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescriptionInput">body_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.corsInput">cors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponseInput">failure_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphInput">func_graph_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicyInput">func_graph_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpInput">http_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicyInput">http_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchModeInput">match_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockInput">mock_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicyInput">mock_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethodInput">request_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParamsInput">request_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocolInput">request_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUriInput">request_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseIdInput">response_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabledInput">security_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationTypeInput">security_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponseInput">success_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescription">body_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cors">cors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponse">failure_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchMode">match_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethod">request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocol">request_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUri">request_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseId">response_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabled">security_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationType">security_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponse">success_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_params`<sup>Required</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParams"></a>

```python
backend_params: ApigwApiV2BackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList">ApigwApiV2BackendParamsList</a>

---

##### `func_graph`<sup>Required</sup> <a name="func_graph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraph"></a>

```python
func_graph: ApigwApiV2FuncGraphOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference">ApigwApiV2FuncGraphOutputReference</a>

---

##### `func_graph_policy`<sup>Required</sup> <a name="func_graph_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicy"></a>

```python
func_graph_policy: ApigwApiV2FuncGraphPolicyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList">ApigwApiV2FuncGraphPolicyList</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.http"></a>

```python
http: ApigwApiV2HttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference">ApigwApiV2HttpOutputReference</a>

---

##### `http_policy`<sup>Required</sup> <a name="http_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicy"></a>

```python
http_policy: ApigwApiV2HttpPolicyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList">ApigwApiV2HttpPolicyList</a>

---

##### `mock`<sup>Required</sup> <a name="mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mock"></a>

```python
mock: ApigwApiV2MockOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference">ApigwApiV2MockOutputReference</a>

---

##### `mock_policy`<sup>Required</sup> <a name="mock_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicy"></a>

```python
mock_policy: ApigwApiV2MockPolicyList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList">ApigwApiV2MockPolicyList</a>

---

##### `registered_at`<sup>Required</sup> <a name="registered_at" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.registeredAt"></a>

```python
registered_at: str
```

- *Type:* str

---

##### `request_params`<sup>Required</sup> <a name="request_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParams"></a>

```python
request_params: ApigwApiV2RequestParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList">ApigwApiV2RequestParamsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `backend_params_input`<sup>Optional</sup> <a name="backend_params_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.backendParamsInput"></a>

```python
backend_params_input: typing.Union[IResolvable, typing.List[ApigwApiV2BackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]

---

##### `body_description_input`<sup>Optional</sup> <a name="body_description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescriptionInput"></a>

```python
body_description_input: str
```

- *Type:* str

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.corsInput"></a>

```python
cors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `failure_response_input`<sup>Optional</sup> <a name="failure_response_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponseInput"></a>

```python
failure_response_input: str
```

- *Type:* str

---

##### `func_graph_input`<sup>Optional</sup> <a name="func_graph_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphInput"></a>

```python
func_graph_input: ApigwApiV2FuncGraph
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---

##### `func_graph_policy_input`<sup>Optional</sup> <a name="func_graph_policy_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.funcGraphPolicyInput"></a>

```python
func_graph_policy_input: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpInput"></a>

```python
http_input: ApigwApiV2Http
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---

##### `http_policy_input`<sup>Optional</sup> <a name="http_policy_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.httpPolicyInput"></a>

```python
http_policy_input: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_mode_input`<sup>Optional</sup> <a name="match_mode_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchModeInput"></a>

```python
match_mode_input: str
```

- *Type:* str

---

##### `mock_input`<sup>Optional</sup> <a name="mock_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockInput"></a>

```python
mock_input: ApigwApiV2Mock
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---

##### `mock_policy_input`<sup>Optional</sup> <a name="mock_policy_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.mockPolicyInput"></a>

```python
mock_policy_input: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `request_method_input`<sup>Optional</sup> <a name="request_method_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethodInput"></a>

```python
request_method_input: str
```

- *Type:* str

---

##### `request_params_input`<sup>Optional</sup> <a name="request_params_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestParamsInput"></a>

```python
request_params_input: typing.Union[IResolvable, typing.List[ApigwApiV2RequestParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]

---

##### `request_protocol_input`<sup>Optional</sup> <a name="request_protocol_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocolInput"></a>

```python
request_protocol_input: str
```

- *Type:* str

---

##### `request_uri_input`<sup>Optional</sup> <a name="request_uri_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUriInput"></a>

```python
request_uri_input: str
```

- *Type:* str

---

##### `response_id_input`<sup>Optional</sup> <a name="response_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseIdInput"></a>

```python
response_id_input: str
```

- *Type:* str

---

##### `security_authentication_enabled_input`<sup>Optional</sup> <a name="security_authentication_enabled_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabledInput"></a>

```python
security_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_authentication_type_input`<sup>Optional</sup> <a name="security_authentication_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationTypeInput"></a>

```python
security_authentication_type_input: str
```

- *Type:* str

---

##### `success_response_input`<sup>Optional</sup> <a name="success_response_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponseInput"></a>

```python
success_response_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `body_description`<sup>Required</sup> <a name="body_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.bodyDescription"></a>

```python
body_description: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.cors"></a>

```python
cors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `failure_response`<sup>Required</sup> <a name="failure_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.failureResponse"></a>

```python
failure_response: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_mode`<sup>Required</sup> <a name="match_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.matchMode"></a>

```python
match_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

---

##### `request_protocol`<sup>Required</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestProtocol"></a>

```python
request_protocol: str
```

- *Type:* str

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.requestUri"></a>

```python
request_uri: str
```

- *Type:* str

---

##### `response_id`<sup>Required</sup> <a name="response_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.responseId"></a>

```python
response_id: str
```

- *Type:* str

---

##### `security_authentication_enabled`<sup>Required</sup> <a name="security_authentication_enabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationEnabled"></a>

```python
security_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_authentication_type`<sup>Required</sup> <a name="security_authentication_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.securityAuthenticationType"></a>

```python
security_authentication_type: str
```

- *Type:* str

---

##### `success_response`<sup>Required</sup> <a name="success_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.successResponse"></a>

```python
success_response: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwApiV2BackendParams <a name="ApigwApiV2BackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2BackendParams(
  location: str,
  name: str,
  type: str,
  value: str,
  description: str = None,
  system_param_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.systemParamType">system_param_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `system_param_type`<sup>Optional</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2Config <a name="ApigwApiV2Config" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gateway_id: str,
  group_id: str,
  name: str,
  request_method: str,
  request_protocol: str,
  request_uri: str,
  type: str,
  authorizer_id: str = None,
  backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2BackendParams]] = None,
  body_description: str = None,
  cors: typing.Union[bool, IResolvable] = None,
  description: str = None,
  failure_response: str = None,
  func_graph: ApigwApiV2FuncGraph = None,
  func_graph_policy: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicy]] = None,
  http: ApigwApiV2Http = None,
  http_policy: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicy]] = None,
  id: str = None,
  match_mode: str = None,
  mock: ApigwApiV2Mock = None,
  mock_policy: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicy]] = None,
  region: str = None,
  request_params: typing.Union[IResolvable, typing.List[ApigwApiV2RequestParams]] = None,
  response_id: str = None,
  security_authentication_enabled: typing.Union[bool, IResolvable] = None,
  security_authentication_type: str = None,
  success_response: str = None,
  tags: typing.List[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestMethod">request_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestProtocol">request_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestUri">request_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.backendParams">backend_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.bodyDescription">body_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.cors">cors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.failureResponse">failure_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraph">func_graph</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | func_graph block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraphPolicy">func_graph_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]</code> | func_graph_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.http">http</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | http block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.httpPolicy">http_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]</code> | http_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#id ApigwApiV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.matchMode">match_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mock">mock</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | mock block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mockPolicy">mock_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]</code> | mock_policy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#region ApigwApiV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestParams">request_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]</code> | request_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.responseId">response_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationEnabled">security_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationType">security_authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.successResponse">success_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}.

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `request_protocol`<sup>Required</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestProtocol"></a>

```python
request_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestUri"></a>

```python
request_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backend_params`<sup>Optional</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.backendParams"></a>

```python
backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2BackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `body_description`<sup>Optional</sup> <a name="body_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.bodyDescription"></a>

```python
body_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.cors"></a>

```python
cors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `failure_response`<sup>Optional</sup> <a name="failure_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.failureResponse"></a>

```python
failure_response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}.

---

##### `func_graph`<sup>Optional</sup> <a name="func_graph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraph"></a>

```python
func_graph: ApigwApiV2FuncGraph
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

func_graph block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#func_graph ApigwApiV2#func_graph}

---

##### `func_graph_policy`<sup>Optional</sup> <a name="func_graph_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.funcGraphPolicy"></a>

```python
func_graph_policy: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]

func_graph_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#func_graph_policy ApigwApiV2#func_graph_policy}

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.http"></a>

```python
http: ApigwApiV2Http
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#http ApigwApiV2#http}

---

##### `http_policy`<sup>Optional</sup> <a name="http_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.httpPolicy"></a>

```python
http_policy: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]

http_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#http_policy ApigwApiV2#http_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#id ApigwApiV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match_mode`<sup>Optional</sup> <a name="match_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.matchMode"></a>

```python
match_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}.

---

##### `mock`<sup>Optional</sup> <a name="mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mock"></a>

```python
mock: ApigwApiV2Mock
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

mock block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#mock ApigwApiV2#mock}

---

##### `mock_policy`<sup>Optional</sup> <a name="mock_policy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.mockPolicy"></a>

```python
mock_policy: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]

mock_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#mock_policy ApigwApiV2#mock_policy}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#region ApigwApiV2#region}.

---

##### `request_params`<sup>Optional</sup> <a name="request_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.requestParams"></a>

```python
request_params: typing.Union[IResolvable, typing.List[ApigwApiV2RequestParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]

request_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_params ApigwApiV2#request_params}

---

##### `response_id`<sup>Optional</sup> <a name="response_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.responseId"></a>

```python
response_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}.

---

##### `security_authentication_enabled`<sup>Optional</sup> <a name="security_authentication_enabled" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationEnabled"></a>

```python
security_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}.

---

##### `security_authentication_type`<sup>Optional</sup> <a name="security_authentication_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.securityAuthenticationType"></a>

```python
security_authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}.

---

##### `success_response`<sup>Optional</sup> <a name="success_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.successResponse"></a>

```python
success_response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Config.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraph <a name="ApigwApiV2FuncGraph" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraph(
  function_urn: str,
  authorizer_id: str = None,
  description: str = None,
  invocation_type: str = None,
  network_type: str = None,
  timeout: typing.Union[int, float] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.functionUrn">function_urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.invocationType">invocation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.functionUrn"></a>

```python
function_urn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraphPolicy <a name="ApigwApiV2FuncGraphPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicy(
  conditions: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyConditions]],
  function_urn: str,
  name: str,
  authorizer_id: str = None,
  backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyBackendParams]] = None,
  effective_mode: str = None,
  invocation_type: str = None,
  network_type: str = None,
  timeout: typing.Union[int, float] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.functionUrn">function_urn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.backendParams">backend_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.effectiveMode">effective_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.invocationType">invocation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.functionUrn"></a>

```python
function_urn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backend_params`<sup>Optional</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.backendParams"></a>

```python
backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `effective_mode`<sup>Optional</sup> <a name="effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.effectiveMode"></a>

```python
effective_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `invocation_type`<sup>Optional</sup> <a name="invocation_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}.

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2FuncGraphPolicyBackendParams <a name="ApigwApiV2FuncGraphPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams(
  location: str,
  name: str,
  type: str,
  value: str,
  description: str = None,
  system_param_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.systemParamType">system_param_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `system_param_type`<sup>Optional</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2FuncGraphPolicyConditions <a name="ApigwApiV2FuncGraphPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyConditions(
  value: str,
  origin: str = None,
  param_name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.origin">origin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.paramName">param_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.origin"></a>

```python
origin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `param_name`<sup>Optional</sup> <a name="param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2Http <a name="ApigwApiV2Http" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2Http(
  request_method: str,
  request_uri: str,
  authorizer_id: str = None,
  description: str = None,
  request_protocol: str = None,
  retry_count: typing.Union[int, float] = None,
  ssl_enable: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  url_domain: str = None,
  version: str = None,
  vpc_channel_id: str = None,
  vpc_channel_proxy_host: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestMethod">request_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestUri">request_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestProtocol">request_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.retryCount">retry_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.sslEnable">ssl_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.urlDomain">url_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelId">vpc_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelProxyHost">vpc_channel_proxy_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}. |

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestUri"></a>

```python
request_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `request_protocol`<sup>Optional</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.requestProtocol"></a>

```python
request_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `retry_count`<sup>Optional</sup> <a name="retry_count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.retryCount"></a>

```python
retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}.

---

##### `ssl_enable`<sup>Optional</sup> <a name="ssl_enable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.sslEnable"></a>

```python
ssl_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `url_domain`<sup>Optional</sup> <a name="url_domain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.urlDomain"></a>

```python
url_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

##### `vpc_channel_id`<sup>Optional</sup> <a name="vpc_channel_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelId"></a>

```python
vpc_channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}.

---

##### `vpc_channel_proxy_host`<sup>Optional</sup> <a name="vpc_channel_proxy_host" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http.property.vpcChannelProxyHost"></a>

```python
vpc_channel_proxy_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}.

---

### ApigwApiV2HttpPolicy <a name="ApigwApiV2HttpPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicy(
  conditions: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyConditions]],
  name: str,
  request_method: str,
  request_uri: str,
  authorizer_id: str = None,
  backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyBackendParams]] = None,
  effective_mode: str = None,
  request_protocol: str = None,
  retry_count: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None,
  url_domain: str = None,
  vpc_channel_id: str = None,
  vpc_channel_proxy_host: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestMethod">request_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestUri">request_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.backendParams">backend_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.effectiveMode">effective_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestProtocol">request_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.retryCount">retry_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.urlDomain">url_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelId">vpc_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelProxyHost">vpc_channel_proxy_host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}.

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestUri"></a>

```python
request_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backend_params`<sup>Optional</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.backendParams"></a>

```python
backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `effective_mode`<sup>Optional</sup> <a name="effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.effectiveMode"></a>

```python
effective_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `request_protocol`<sup>Optional</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.requestProtocol"></a>

```python
request_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}.

---

##### `retry_count`<sup>Optional</sup> <a name="retry_count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.retryCount"></a>

```python
retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}.

---

##### `url_domain`<sup>Optional</sup> <a name="url_domain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.urlDomain"></a>

```python
url_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}.

---

##### `vpc_channel_id`<sup>Optional</sup> <a name="vpc_channel_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelId"></a>

```python
vpc_channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}.

---

##### `vpc_channel_proxy_host`<sup>Optional</sup> <a name="vpc_channel_proxy_host" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy.property.vpcChannelProxyHost"></a>

```python
vpc_channel_proxy_host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}.

---

### ApigwApiV2HttpPolicyBackendParams <a name="ApigwApiV2HttpPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyBackendParams(
  location: str,
  name: str,
  type: str,
  value: str,
  description: str = None,
  system_param_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.systemParamType">system_param_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `system_param_type`<sup>Optional</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2HttpPolicyConditions <a name="ApigwApiV2HttpPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyConditions(
  value: str,
  origin: str = None,
  param_name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.origin">origin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.paramName">param_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.origin"></a>

```python
origin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `param_name`<sup>Optional</sup> <a name="param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2Mock <a name="ApigwApiV2Mock" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2Mock(
  authorizer_id: str = None,
  description: str = None,
  response: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.response">response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response ApigwApiV2#response}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}. |

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.response"></a>

```python
response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response ApigwApiV2#response}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#version ApigwApiV2#version}.

---

### ApigwApiV2MockPolicy <a name="ApigwApiV2MockPolicy" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicy(
  conditions: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyConditions]],
  name: str,
  authorizer_id: str = None,
  backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyBackendParams]] = None,
  effective_mode: str = None,
  response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.authorizerId">authorizer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.backendParams">backend_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]]</code> | backend_params block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.effectiveMode">effective_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.response">response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response ApigwApiV2#response}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `authorizer_id`<sup>Optional</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}.

---

##### `backend_params`<sup>Optional</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.backendParams"></a>

```python
backend_params: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]]

backend_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}

---

##### `effective_mode`<sup>Optional</sup> <a name="effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.effectiveMode"></a>

```python
effective_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}.

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy.property.response"></a>

```python
response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#response ApigwApiV2#response}.

---

### ApigwApiV2MockPolicyBackendParams <a name="ApigwApiV2MockPolicyBackendParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyBackendParams(
  location: str,
  name: str,
  type: str,
  value: str,
  description: str = None,
  system_param_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.systemParamType">system_param_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `system_param_type`<sup>Optional</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}.

---

### ApigwApiV2MockPolicyConditions <a name="ApigwApiV2MockPolicyConditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyConditions(
  value: str,
  origin: str = None,
  param_name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.origin">origin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.paramName">param_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#value ApigwApiV2#value}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.origin"></a>

```python
origin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}.

---

##### `param_name`<sup>Optional</sup> <a name="param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

### ApigwApiV2RequestParams <a name="ApigwApiV2RequestParams" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2RequestParams(
  name: str,
  default: str = None,
  description: str = None,
  enumeration: str = None,
  location: str = None,
  maximum: typing.Union[int, float] = None,
  minimum: typing.Union[int, float] = None,
  passthrough: typing.Union[bool, IResolvable] = None,
  required: typing.Union[bool, IResolvable] = None,
  sample: str = None,
  type: str = None,
  validity_check: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#default ApigwApiV2#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.enumeration">enumeration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#enumeration ApigwApiV2#enumeration}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#maximum ApigwApiV2#maximum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#minimum ApigwApiV2#minimum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.passthrough">passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#passthrough ApigwApiV2#passthrough}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#required ApigwApiV2#required}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.sample">sample</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#sample ApigwApiV2#sample}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.validityCheck">validity_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#validity_check ApigwApiV2#validity_check}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#name ApigwApiV2#name}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#default ApigwApiV2#default}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#description ApigwApiV2#description}.

---

##### `enumeration`<sup>Optional</sup> <a name="enumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.enumeration"></a>

```python
enumeration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#enumeration ApigwApiV2#enumeration}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#location ApigwApiV2#location}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#maximum ApigwApiV2#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#minimum ApigwApiV2#minimum}.

---

##### `passthrough`<sup>Optional</sup> <a name="passthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.passthrough"></a>

```python
passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#passthrough ApigwApiV2#passthrough}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#required ApigwApiV2#required}.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.sample"></a>

```python
sample: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#sample ApigwApiV2#sample}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#type ApigwApiV2#type}.

---

##### `validity_check`<sup>Optional</sup> <a name="validity_check" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams.property.validityCheck"></a>

```python
validity_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_api_v2#validity_check ApigwApiV2#validity_check}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwApiV2BackendParamsList <a name="ApigwApiV2BackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2BackendParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2BackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2BackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]]

---


### ApigwApiV2BackendParamsOutputReference <a name="ApigwApiV2BackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2BackendParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetSystemParamType">reset_system_param_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_system_param_type` <a name="reset_system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.resetSystemParamType"></a>

```python
def reset_system_param_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamTypeInput">system_param_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamType">system_param_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `system_param_type_input`<sup>Optional</sup> <a name="system_param_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamTypeInput"></a>

```python
system_param_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `system_param_type`<sup>Required</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2BackendParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2BackendParams">ApigwApiV2BackendParams</a>]

---


### ApigwApiV2FuncGraphOutputReference <a name="ApigwApiV2FuncGraphOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetInvocationType">reset_invocation_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_invocation_type` <a name="reset_invocation_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetInvocationType"></a>

```python
def reset_invocation_type() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrnInput">function_urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationTypeInput">invocation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrn">function_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_urn_input`<sup>Optional</sup> <a name="function_urn_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrnInput"></a>

```python
function_urn_input: str
```

- *Type:* str

---

##### `invocation_type_input`<sup>Optional</sup> <a name="invocation_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationTypeInput"></a>

```python
invocation_type_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.functionUrn"></a>

```python
function_urn: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphOutputReference.property.internalValue"></a>

```python
internal_value: ApigwApiV2FuncGraph
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraph">ApigwApiV2FuncGraph</a>

---


### ApigwApiV2FuncGraphPolicyBackendParamsList <a name="ApigwApiV2FuncGraphPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2FuncGraphPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]]

---


### ApigwApiV2FuncGraphPolicyBackendParamsOutputReference <a name="ApigwApiV2FuncGraphPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetSystemParamType">reset_system_param_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_system_param_type` <a name="reset_system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```python
def reset_system_param_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamTypeInput">system_param_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamType">system_param_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `system_param_type_input`<sup>Optional</sup> <a name="system_param_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```python
system_param_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `system_param_type`<sup>Required</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2FuncGraphPolicyBackendParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]

---


### ApigwApiV2FuncGraphPolicyConditionsList <a name="ApigwApiV2FuncGraphPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2FuncGraphPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]]

---


### ApigwApiV2FuncGraphPolicyConditionsOutputReference <a name="ApigwApiV2FuncGraphPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetParamName">reset_param_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_param_name` <a name="reset_param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetParamName"></a>

```python
def reset_param_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.originInput">origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramNameInput">param_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.originInput"></a>

```python
origin_input: str
```

- *Type:* str

---

##### `param_name_input`<sup>Optional</sup> <a name="param_name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramNameInput"></a>

```python
param_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2FuncGraphPolicyConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]

---


### ApigwApiV2FuncGraphPolicyList <a name="ApigwApiV2FuncGraphPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2FuncGraphPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]]

---


### ApigwApiV2FuncGraphPolicyOutputReference <a name="ApigwApiV2FuncGraphPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams">put_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetBackendParams">reset_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetEffectiveMode">reset_effective_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetInvocationType">reset_invocation_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend_params` <a name="put_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams"></a>

```python
def put_backend_params(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyBackendParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]]

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]]

---

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_backend_params` <a name="reset_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetBackendParams"></a>

```python
def reset_backend_params() -> None
```

##### `reset_effective_mode` <a name="reset_effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetEffectiveMode"></a>

```python
def reset_effective_mode() -> None
```

##### `reset_invocation_type` <a name="reset_invocation_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetInvocationType"></a>

```python
def reset_invocation_type() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParams">backend_params</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList">ApigwApiV2FuncGraphPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList">ApigwApiV2FuncGraphPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParamsInput">backend_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveModeInput">effective_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrnInput">function_urn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationTypeInput">invocation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveMode">effective_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrn">function_urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_params`<sup>Required</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParams"></a>

```python
backend_params: ApigwApiV2FuncGraphPolicyBackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParamsList">ApigwApiV2FuncGraphPolicyBackendParamsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditions"></a>

```python
conditions: ApigwApiV2FuncGraphPolicyConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditionsList">ApigwApiV2FuncGraphPolicyConditionsList</a>

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `backend_params_input`<sup>Optional</sup> <a name="backend_params_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.backendParamsInput"></a>

```python
backend_params_input: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyBackendParams">ApigwApiV2FuncGraphPolicyBackendParams</a>]]

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[ApigwApiV2FuncGraphPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyConditions">ApigwApiV2FuncGraphPolicyConditions</a>]]

---

##### `effective_mode_input`<sup>Optional</sup> <a name="effective_mode_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveModeInput"></a>

```python
effective_mode_input: str
```

- *Type:* str

---

##### `function_urn_input`<sup>Optional</sup> <a name="function_urn_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrnInput"></a>

```python
function_urn_input: str
```

- *Type:* str

---

##### `invocation_type_input`<sup>Optional</sup> <a name="invocation_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationTypeInput"></a>

```python
invocation_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `effective_mode`<sup>Required</sup> <a name="effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.effectiveMode"></a>

```python
effective_mode: str
```

- *Type:* str

---

##### `function_urn`<sup>Required</sup> <a name="function_urn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.functionUrn"></a>

```python
function_urn: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2FuncGraphPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2FuncGraphPolicy">ApigwApiV2FuncGraphPolicy</a>]

---


### ApigwApiV2HttpOutputReference <a name="ApigwApiV2HttpOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRequestProtocol">reset_request_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRetryCount">reset_retry_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetSslEnable">reset_ssl_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetUrlDomain">reset_url_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelId">reset_vpc_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelProxyHost">reset_vpc_channel_proxy_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_request_protocol` <a name="reset_request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRequestProtocol"></a>

```python
def reset_request_protocol() -> None
```

##### `reset_retry_count` <a name="reset_retry_count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetRetryCount"></a>

```python
def reset_retry_count() -> None
```

##### `reset_ssl_enable` <a name="reset_ssl_enable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetSslEnable"></a>

```python
def reset_ssl_enable() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_url_domain` <a name="reset_url_domain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetUrlDomain"></a>

```python
def reset_url_domain() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_vpc_channel_id` <a name="reset_vpc_channel_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelId"></a>

```python
def reset_vpc_channel_id() -> None
```

##### `reset_vpc_channel_proxy_host` <a name="reset_vpc_channel_proxy_host" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.resetVpcChannelProxyHost"></a>

```python
def reset_vpc_channel_proxy_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethodInput">request_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocolInput">request_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUriInput">request_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCountInput">retry_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnableInput">ssl_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomainInput">url_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelIdInput">vpc_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHostInput">vpc_channel_proxy_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethod">request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocol">request_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUri">request_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCount">retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnable">ssl_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomain">url_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelId">vpc_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHost">vpc_channel_proxy_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `request_method_input`<sup>Optional</sup> <a name="request_method_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethodInput"></a>

```python
request_method_input: str
```

- *Type:* str

---

##### `request_protocol_input`<sup>Optional</sup> <a name="request_protocol_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocolInput"></a>

```python
request_protocol_input: str
```

- *Type:* str

---

##### `request_uri_input`<sup>Optional</sup> <a name="request_uri_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUriInput"></a>

```python
request_uri_input: str
```

- *Type:* str

---

##### `retry_count_input`<sup>Optional</sup> <a name="retry_count_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCountInput"></a>

```python
retry_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_enable_input`<sup>Optional</sup> <a name="ssl_enable_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnableInput"></a>

```python
ssl_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_domain_input`<sup>Optional</sup> <a name="url_domain_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomainInput"></a>

```python
url_domain_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `vpc_channel_id_input`<sup>Optional</sup> <a name="vpc_channel_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelIdInput"></a>

```python
vpc_channel_id_input: str
```

- *Type:* str

---

##### `vpc_channel_proxy_host_input`<sup>Optional</sup> <a name="vpc_channel_proxy_host_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHostInput"></a>

```python
vpc_channel_proxy_host_input: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

---

##### `request_protocol`<sup>Required</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestProtocol"></a>

```python
request_protocol: str
```

- *Type:* str

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.requestUri"></a>

```python
request_uri: str
```

- *Type:* str

---

##### `retry_count`<sup>Required</sup> <a name="retry_count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.retryCount"></a>

```python
retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_enable`<sup>Required</sup> <a name="ssl_enable" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.sslEnable"></a>

```python
ssl_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_domain`<sup>Required</sup> <a name="url_domain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.urlDomain"></a>

```python
url_domain: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vpc_channel_id`<sup>Required</sup> <a name="vpc_channel_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelId"></a>

```python
vpc_channel_id: str
```

- *Type:* str

---

##### `vpc_channel_proxy_host`<sup>Required</sup> <a name="vpc_channel_proxy_host" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.vpcChannelProxyHost"></a>

```python
vpc_channel_proxy_host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpOutputReference.property.internalValue"></a>

```python
internal_value: ApigwApiV2Http
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Http">ApigwApiV2Http</a>

---


### ApigwApiV2HttpPolicyBackendParamsList <a name="ApigwApiV2HttpPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2HttpPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]]

---


### ApigwApiV2HttpPolicyBackendParamsOutputReference <a name="ApigwApiV2HttpPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetSystemParamType">reset_system_param_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_system_param_type` <a name="reset_system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```python
def reset_system_param_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamTypeInput">system_param_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamType">system_param_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `system_param_type_input`<sup>Optional</sup> <a name="system_param_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```python
system_param_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `system_param_type`<sup>Required</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2HttpPolicyBackendParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]

---


### ApigwApiV2HttpPolicyConditionsList <a name="ApigwApiV2HttpPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2HttpPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]]

---


### ApigwApiV2HttpPolicyConditionsOutputReference <a name="ApigwApiV2HttpPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetParamName">reset_param_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_param_name` <a name="reset_param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetParamName"></a>

```python
def reset_param_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.originInput">origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramNameInput">param_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.originInput"></a>

```python
origin_input: str
```

- *Type:* str

---

##### `param_name_input`<sup>Optional</sup> <a name="param_name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramNameInput"></a>

```python
param_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2HttpPolicyConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]

---


### ApigwApiV2HttpPolicyList <a name="ApigwApiV2HttpPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2HttpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]]

---


### ApigwApiV2HttpPolicyOutputReference <a name="ApigwApiV2HttpPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2HttpPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams">put_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetBackendParams">reset_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetEffectiveMode">reset_effective_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRequestProtocol">reset_request_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRetryCount">reset_retry_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetUrlDomain">reset_url_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelId">reset_vpc_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelProxyHost">reset_vpc_channel_proxy_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend_params` <a name="put_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams"></a>

```python
def put_backend_params(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyBackendParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]]

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]]

---

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_backend_params` <a name="reset_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetBackendParams"></a>

```python
def reset_backend_params() -> None
```

##### `reset_effective_mode` <a name="reset_effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetEffectiveMode"></a>

```python
def reset_effective_mode() -> None
```

##### `reset_request_protocol` <a name="reset_request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRequestProtocol"></a>

```python
def reset_request_protocol() -> None
```

##### `reset_retry_count` <a name="reset_retry_count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetRetryCount"></a>

```python
def reset_retry_count() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_url_domain` <a name="reset_url_domain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetUrlDomain"></a>

```python
def reset_url_domain() -> None
```

##### `reset_vpc_channel_id` <a name="reset_vpc_channel_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelId"></a>

```python
def reset_vpc_channel_id() -> None
```

##### `reset_vpc_channel_proxy_host` <a name="reset_vpc_channel_proxy_host" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.resetVpcChannelProxyHost"></a>

```python
def reset_vpc_channel_proxy_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParams">backend_params</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList">ApigwApiV2HttpPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList">ApigwApiV2HttpPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParamsInput">backend_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveModeInput">effective_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethodInput">request_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocolInput">request_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUriInput">request_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCountInput">retry_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomainInput">url_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelIdInput">vpc_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHostInput">vpc_channel_proxy_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveMode">effective_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethod">request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocol">request_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUri">request_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCount">retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomain">url_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelId">vpc_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHost">vpc_channel_proxy_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_params`<sup>Required</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParams"></a>

```python
backend_params: ApigwApiV2HttpPolicyBackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParamsList">ApigwApiV2HttpPolicyBackendParamsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditions"></a>

```python
conditions: ApigwApiV2HttpPolicyConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditionsList">ApigwApiV2HttpPolicyConditionsList</a>

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `backend_params_input`<sup>Optional</sup> <a name="backend_params_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.backendParamsInput"></a>

```python
backend_params_input: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyBackendParams">ApigwApiV2HttpPolicyBackendParams</a>]]

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[ApigwApiV2HttpPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyConditions">ApigwApiV2HttpPolicyConditions</a>]]

---

##### `effective_mode_input`<sup>Optional</sup> <a name="effective_mode_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveModeInput"></a>

```python
effective_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `request_method_input`<sup>Optional</sup> <a name="request_method_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethodInput"></a>

```python
request_method_input: str
```

- *Type:* str

---

##### `request_protocol_input`<sup>Optional</sup> <a name="request_protocol_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocolInput"></a>

```python
request_protocol_input: str
```

- *Type:* str

---

##### `request_uri_input`<sup>Optional</sup> <a name="request_uri_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUriInput"></a>

```python
request_uri_input: str
```

- *Type:* str

---

##### `retry_count_input`<sup>Optional</sup> <a name="retry_count_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCountInput"></a>

```python
retry_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_domain_input`<sup>Optional</sup> <a name="url_domain_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomainInput"></a>

```python
url_domain_input: str
```

- *Type:* str

---

##### `vpc_channel_id_input`<sup>Optional</sup> <a name="vpc_channel_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelIdInput"></a>

```python
vpc_channel_id_input: str
```

- *Type:* str

---

##### `vpc_channel_proxy_host_input`<sup>Optional</sup> <a name="vpc_channel_proxy_host_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHostInput"></a>

```python
vpc_channel_proxy_host_input: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `effective_mode`<sup>Required</sup> <a name="effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.effectiveMode"></a>

```python
effective_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `request_method`<sup>Required</sup> <a name="request_method" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestMethod"></a>

```python
request_method: str
```

- *Type:* str

---

##### `request_protocol`<sup>Required</sup> <a name="request_protocol" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestProtocol"></a>

```python
request_protocol: str
```

- *Type:* str

---

##### `request_uri`<sup>Required</sup> <a name="request_uri" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.requestUri"></a>

```python
request_uri: str
```

- *Type:* str

---

##### `retry_count`<sup>Required</sup> <a name="retry_count" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.retryCount"></a>

```python
retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_domain`<sup>Required</sup> <a name="url_domain" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.urlDomain"></a>

```python
url_domain: str
```

- *Type:* str

---

##### `vpc_channel_id`<sup>Required</sup> <a name="vpc_channel_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelId"></a>

```python
vpc_channel_id: str
```

- *Type:* str

---

##### `vpc_channel_proxy_host`<sup>Required</sup> <a name="vpc_channel_proxy_host" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.vpcChannelProxyHost"></a>

```python
vpc_channel_proxy_host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2HttpPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2HttpPolicy">ApigwApiV2HttpPolicy</a>]

---


### ApigwApiV2MockOutputReference <a name="ApigwApiV2MockOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetResponse">reset_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockOutputReference.property.internalValue"></a>

```python
internal_value: ApigwApiV2Mock
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2Mock">ApigwApiV2Mock</a>

---


### ApigwApiV2MockPolicyBackendParamsList <a name="ApigwApiV2MockPolicyBackendParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyBackendParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2MockPolicyBackendParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]]

---


### ApigwApiV2MockPolicyBackendParamsOutputReference <a name="ApigwApiV2MockPolicyBackendParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetSystemParamType">reset_system_param_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_system_param_type` <a name="reset_system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.resetSystemParamType"></a>

```python
def reset_system_param_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamTypeInput">system_param_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamType">system_param_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `system_param_type_input`<sup>Optional</sup> <a name="system_param_type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamTypeInput"></a>

```python
system_param_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `system_param_type`<sup>Required</sup> <a name="system_param_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.systemParamType"></a>

```python
system_param_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2MockPolicyBackendParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]

---


### ApigwApiV2MockPolicyConditionsList <a name="ApigwApiV2MockPolicyConditionsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2MockPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]]

---


### ApigwApiV2MockPolicyConditionsOutputReference <a name="ApigwApiV2MockPolicyConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetParamName">reset_param_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_param_name` <a name="reset_param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetParamName"></a>

```python
def reset_param_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.originInput">origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramNameInput">param_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramName">param_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.originInput"></a>

```python
origin_input: str
```

- *Type:* str

---

##### `param_name_input`<sup>Optional</sup> <a name="param_name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramNameInput"></a>

```python
param_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `param_name`<sup>Required</sup> <a name="param_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.paramName"></a>

```python
param_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2MockPolicyConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]

---


### ApigwApiV2MockPolicyList <a name="ApigwApiV2MockPolicyList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2MockPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]]

---


### ApigwApiV2MockPolicyOutputReference <a name="ApigwApiV2MockPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2MockPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams">put_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetAuthorizerId">reset_authorizer_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetBackendParams">reset_backend_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetEffectiveMode">reset_effective_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetResponse">reset_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backend_params` <a name="put_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams"></a>

```python
def put_backend_params(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyBackendParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putBackendParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]]

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]]

---

##### `reset_authorizer_id` <a name="reset_authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetAuthorizerId"></a>

```python
def reset_authorizer_id() -> None
```

##### `reset_backend_params` <a name="reset_backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetBackendParams"></a>

```python
def reset_backend_params() -> None
```

##### `reset_effective_mode` <a name="reset_effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetEffectiveMode"></a>

```python
def reset_effective_mode() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParams">backend_params</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList">ApigwApiV2MockPolicyBackendParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList">ApigwApiV2MockPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerIdInput">authorizer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParamsInput">backend_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveModeInput">effective_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.responseInput">response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerId">authorizer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveMode">effective_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.response">response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_params`<sup>Required</sup> <a name="backend_params" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParams"></a>

```python
backend_params: ApigwApiV2MockPolicyBackendParamsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParamsList">ApigwApiV2MockPolicyBackendParamsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditions"></a>

```python
conditions: ApigwApiV2MockPolicyConditionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditionsList">ApigwApiV2MockPolicyConditionsList</a>

---

##### `authorizer_id_input`<sup>Optional</sup> <a name="authorizer_id_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerIdInput"></a>

```python
authorizer_id_input: str
```

- *Type:* str

---

##### `backend_params_input`<sup>Optional</sup> <a name="backend_params_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.backendParamsInput"></a>

```python
backend_params_input: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyBackendParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyBackendParams">ApigwApiV2MockPolicyBackendParams</a>]]

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[ApigwApiV2MockPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyConditions">ApigwApiV2MockPolicyConditions</a>]]

---

##### `effective_mode_input`<sup>Optional</sup> <a name="effective_mode_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveModeInput"></a>

```python
effective_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.responseInput"></a>

```python
response_input: str
```

- *Type:* str

---

##### `authorizer_id`<sup>Required</sup> <a name="authorizer_id" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.authorizerId"></a>

```python
authorizer_id: str
```

- *Type:* str

---

##### `effective_mode`<sup>Required</sup> <a name="effective_mode" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.effectiveMode"></a>

```python
effective_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.response"></a>

```python
response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2MockPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2MockPolicy">ApigwApiV2MockPolicy</a>]

---


### ApigwApiV2RequestParamsList <a name="ApigwApiV2RequestParamsList" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2RequestParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigwApiV2RequestParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApigwApiV2RequestParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]]

---


### ApigwApiV2RequestParamsOutputReference <a name="ApigwApiV2RequestParamsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_api_v2

apigwApiV2.ApigwApiV2RequestParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetEnumeration">reset_enumeration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMaximum">reset_maximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMinimum">reset_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetPassthrough">reset_passthrough</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetSample">reset_sample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetValidityCheck">reset_validity_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enumeration` <a name="reset_enumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetEnumeration"></a>

```python
def reset_enumeration() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_maximum` <a name="reset_maximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMaximum"></a>

```python
def reset_maximum() -> None
```

##### `reset_minimum` <a name="reset_minimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetMinimum"></a>

```python
def reset_minimum() -> None
```

##### `reset_passthrough` <a name="reset_passthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetPassthrough"></a>

```python
def reset_passthrough() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_sample` <a name="reset_sample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetSample"></a>

```python
def reset_sample() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_validity_check` <a name="reset_validity_check" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.resetValidityCheck"></a>

```python
def reset_validity_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumerationInput">enumeration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximumInput">maximum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimumInput">minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthroughInput">passthrough_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sampleInput">sample_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheckInput">validity_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumeration">enumeration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthrough">passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sample">sample</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheck">validity_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enumeration_input`<sup>Optional</sup> <a name="enumeration_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumerationInput"></a>

```python
enumeration_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maximum_input`<sup>Optional</sup> <a name="maximum_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximumInput"></a>

```python
maximum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimumInput"></a>

```python
minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `passthrough_input`<sup>Optional</sup> <a name="passthrough_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthroughInput"></a>

```python
passthrough_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sample_input`<sup>Optional</sup> <a name="sample_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sampleInput"></a>

```python
sample_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validity_check_input`<sup>Optional</sup> <a name="validity_check_input" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheckInput"></a>

```python
validity_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enumeration`<sup>Required</sup> <a name="enumeration" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.enumeration"></a>

```python
enumeration: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `passthrough`<sup>Required</sup> <a name="passthrough" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.passthrough"></a>

```python
passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sample`<sup>Required</sup> <a name="sample" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.sample"></a>

```python
sample: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validity_check`<sup>Required</sup> <a name="validity_check" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.validityCheck"></a>

```python
validity_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwApiV2RequestParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwApiV2.ApigwApiV2RequestParams">ApigwApiV2RequestParams</a>]

---



