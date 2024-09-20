# `lbListenerV3` Submodule <a name="`lbListenerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbListenerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV3 <a name="LbListenerV3" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3 opentelekomcloud_lb_listener_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer_id: str,
  protocol: str,
  protocol_port: typing.Union[int, float],
  admin_state_up: typing.Union[bool, IResolvable] = None,
  advanced_forwarding: typing.Union[bool, IResolvable] = None,
  client_ca_tls_container_ref: str = None,
  client_timeout: typing.Union[int, float] = None,
  default_pool_id: str = None,
  default_tls_container_ref: str = None,
  description: str = None,
  http2_enable: typing.Union[bool, IResolvable] = None,
  id: str = None,
  insert_headers: LbListenerV3InsertHeaders = None,
  ip_group: LbListenerV3IpGroup = None,
  keep_alive_timeout: typing.Union[int, float] = None,
  member_retry_enable: typing.Union[bool, IResolvable] = None,
  member_timeout: typing.Union[int, float] = None,
  name: str = None,
  security_policy_id: str = None,
  sni_container_refs: typing.List[str] = None,
  sni_match_algo: str = None,
  tags: typing.Mapping[str] = None,
  tls_ciphers_policy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.advancedForwarding">advanced_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientCaTlsContainerRef">client_ca_tls_container_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultPoolId">default_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultTlsContainerRef">default_tls_container_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#description LbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.http2Enable">http2_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.insertHeaders">insert_headers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | insert_headers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.ipGroup">ip_group</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.keepAliveTimeout">keep_alive_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberRetryEnable">member_retry_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberTimeout">member_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#name LbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.securityPolicyId">security_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniContainerRefs">sni_container_refs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniMatchAlgo">sni_match_algo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tags LbListenerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tlsCiphersPolicy">tls_ciphers_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.loadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}.

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.protocolPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.adminStateUp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}.

---

##### `advanced_forwarding`<sup>Optional</sup> <a name="advanced_forwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.advancedForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}.

---

##### `client_ca_tls_container_ref`<sup>Optional</sup> <a name="client_ca_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientCaTlsContainerRef"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}.

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.clientTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}.

---

##### `default_pool_id`<sup>Optional</sup> <a name="default_pool_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}.

---

##### `default_tls_container_ref`<sup>Optional</sup> <a name="default_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.defaultTlsContainerRef"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#description LbListenerV3#description}.

---

##### `http2_enable`<sup>Optional</sup> <a name="http2_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.http2Enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insert_headers`<sup>Optional</sup> <a name="insert_headers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.insertHeaders"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

insert_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#insert_headers LbListenerV3#insert_headers}

---

##### `ip_group`<sup>Optional</sup> <a name="ip_group" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.ipGroup"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}

---

##### `keep_alive_timeout`<sup>Optional</sup> <a name="keep_alive_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.keepAliveTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}.

---

##### `member_retry_enable`<sup>Optional</sup> <a name="member_retry_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberRetryEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}.

---

##### `member_timeout`<sup>Optional</sup> <a name="member_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.memberTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#name LbListenerV3#name}.

---

##### `security_policy_id`<sup>Optional</sup> <a name="security_policy_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.securityPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}.

---

##### `sni_container_refs`<sup>Optional</sup> <a name="sni_container_refs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniContainerRefs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}.

---

##### `sni_match_algo`<sup>Optional</sup> <a name="sni_match_algo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.sniMatchAlgo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tags LbListenerV3#tags}.

---

##### `tls_ciphers_policy`<sup>Optional</sup> <a name="tls_ciphers_policy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.Initializer.parameter.tlsCiphersPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders">put_insert_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup">put_ip_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp">reset_admin_state_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding">reset_advanced_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef">reset_client_ca_tls_container_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout">reset_client_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId">reset_default_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef">reset_default_tls_container_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable">reset_http2_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders">reset_insert_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup">reset_ip_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout">reset_keep_alive_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable">reset_member_retry_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout">reset_member_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId">reset_security_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs">reset_sni_container_refs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo">reset_sni_match_algo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy">reset_tls_ciphers_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_insert_headers` <a name="put_insert_headers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders"></a>

```python
def put_insert_headers(
  forwarded_for_port: typing.Union[bool, IResolvable] = None,
  forwarded_host: typing.Union[bool, IResolvable] = None,
  forwarded_port: typing.Union[bool, IResolvable] = None,
  forward_elb_ip: typing.Union[bool, IResolvable] = None
) -> None
```

###### `forwarded_for_port`<sup>Optional</sup> <a name="forwarded_for_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.forwardedForPort"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}.

---

###### `forwarded_host`<sup>Optional</sup> <a name="forwarded_host" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.forwardedHost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}.

---

###### `forwarded_port`<sup>Optional</sup> <a name="forwarded_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.forwardedPort"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}.

---

###### `forward_elb_ip`<sup>Optional</sup> <a name="forward_elb_ip" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putInsertHeaders.parameter.forwardElbIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}.

---

##### `put_ip_group` <a name="put_ip_group" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup"></a>

```python
def put_ip_group(
  id: str,
  enable: typing.Union[bool, IResolvable] = None,
  type: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#enable LbListenerV3#enable}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.putIpGroup.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#type LbListenerV3#type}.

---

##### `reset_admin_state_up` <a name="reset_admin_state_up" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdminStateUp"></a>

```python
def reset_admin_state_up() -> None
```

##### `reset_advanced_forwarding` <a name="reset_advanced_forwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetAdvancedForwarding"></a>

```python
def reset_advanced_forwarding() -> None
```

##### `reset_client_ca_tls_container_ref` <a name="reset_client_ca_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientCaTlsContainerRef"></a>

```python
def reset_client_ca_tls_container_ref() -> None
```

##### `reset_client_timeout` <a name="reset_client_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetClientTimeout"></a>

```python
def reset_client_timeout() -> None
```

##### `reset_default_pool_id` <a name="reset_default_pool_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultPoolId"></a>

```python
def reset_default_pool_id() -> None
```

##### `reset_default_tls_container_ref` <a name="reset_default_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDefaultTlsContainerRef"></a>

```python
def reset_default_tls_container_ref() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_http2_enable` <a name="reset_http2_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetHttp2Enable"></a>

```python
def reset_http2_enable() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insert_headers` <a name="reset_insert_headers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetInsertHeaders"></a>

```python
def reset_insert_headers() -> None
```

##### `reset_ip_group` <a name="reset_ip_group" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetIpGroup"></a>

```python
def reset_ip_group() -> None
```

##### `reset_keep_alive_timeout` <a name="reset_keep_alive_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetKeepAliveTimeout"></a>

```python
def reset_keep_alive_timeout() -> None
```

##### `reset_member_retry_enable` <a name="reset_member_retry_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberRetryEnable"></a>

```python
def reset_member_retry_enable() -> None
```

##### `reset_member_timeout` <a name="reset_member_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetMemberTimeout"></a>

```python
def reset_member_timeout() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_security_policy_id` <a name="reset_security_policy_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSecurityPolicyId"></a>

```python
def reset_security_policy_id() -> None
```

##### `reset_sni_container_refs` <a name="reset_sni_container_refs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniContainerRefs"></a>

```python
def reset_sni_container_refs() -> None
```

##### `reset_sni_match_algo` <a name="reset_sni_match_algo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetSniMatchAlgo"></a>

```python
def reset_sni_match_algo() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tls_ciphers_policy` <a name="reset_tls_ciphers_policy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.resetTlsCiphersPolicy"></a>

```python
def reset_tls_ciphers_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbListenerV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbListenerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders">insert_headers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup">ip_group</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference">LbListenerV3IpGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput">admin_state_up_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput">advanced_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput">client_ca_tls_container_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput">client_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput">default_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput">default_tls_container_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput">http2_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput">insert_headers_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput">ip_group_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput">keep_alive_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput">loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput">member_retry_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput">member_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput">protocol_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput">security_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput">sni_container_refs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput">sni_match_algo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput">tls_ciphers_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding">advanced_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef">client_ca_tls_container_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId">default_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef">default_tls_container_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable">http2_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout">keep_alive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable">member_retry_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout">member_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId">security_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs">sni_container_refs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo">sni_match_algo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy">tls_ciphers_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `insert_headers`<sup>Required</sup> <a name="insert_headers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeaders"></a>

```python
insert_headers: LbListenerV3InsertHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference">LbListenerV3InsertHeadersOutputReference</a>

---

##### `ip_group`<sup>Required</sup> <a name="ip_group" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroup"></a>

```python
ip_group: LbListenerV3IpGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference">LbListenerV3IpGroupOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `admin_state_up_input`<sup>Optional</sup> <a name="admin_state_up_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUpInput"></a>

```python
admin_state_up_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `advanced_forwarding_input`<sup>Optional</sup> <a name="advanced_forwarding_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwardingInput"></a>

```python
advanced_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_ca_tls_container_ref_input`<sup>Optional</sup> <a name="client_ca_tls_container_ref_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRefInput"></a>

```python
client_ca_tls_container_ref_input: str
```

- *Type:* str

---

##### `client_timeout_input`<sup>Optional</sup> <a name="client_timeout_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeoutInput"></a>

```python
client_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_pool_id_input`<sup>Optional</sup> <a name="default_pool_id_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolIdInput"></a>

```python
default_pool_id_input: str
```

- *Type:* str

---

##### `default_tls_container_ref_input`<sup>Optional</sup> <a name="default_tls_container_ref_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRefInput"></a>

```python
default_tls_container_ref_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `http2_enable_input`<sup>Optional</sup> <a name="http2_enable_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2EnableInput"></a>

```python
http2_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insert_headers_input`<sup>Optional</sup> <a name="insert_headers_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.insertHeadersInput"></a>

```python
insert_headers_input: LbListenerV3InsertHeaders
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---

##### `ip_group_input`<sup>Optional</sup> <a name="ip_group_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.ipGroupInput"></a>

```python
ip_group_input: LbListenerV3IpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---

##### `keep_alive_timeout_input`<sup>Optional</sup> <a name="keep_alive_timeout_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeoutInput"></a>

```python
keep_alive_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id_input`<sup>Optional</sup> <a name="loadbalancer_id_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerIdInput"></a>

```python
loadbalancer_id_input: str
```

- *Type:* str

---

##### `member_retry_enable_input`<sup>Optional</sup> <a name="member_retry_enable_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnableInput"></a>

```python
member_retry_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `member_timeout_input`<sup>Optional</sup> <a name="member_timeout_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeoutInput"></a>

```python
member_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol_port_input`<sup>Optional</sup> <a name="protocol_port_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPortInput"></a>

```python
protocol_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_policy_id_input`<sup>Optional</sup> <a name="security_policy_id_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyIdInput"></a>

```python
security_policy_id_input: str
```

- *Type:* str

---

##### `sni_container_refs_input`<sup>Optional</sup> <a name="sni_container_refs_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefsInput"></a>

```python
sni_container_refs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sni_match_algo_input`<sup>Optional</sup> <a name="sni_match_algo_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgoInput"></a>

```python
sni_match_algo_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_ciphers_policy_input`<sup>Optional</sup> <a name="tls_ciphers_policy_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicyInput"></a>

```python
tls_ciphers_policy_input: str
```

- *Type:* str

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `advanced_forwarding`<sup>Required</sup> <a name="advanced_forwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.advancedForwarding"></a>

```python
advanced_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_ca_tls_container_ref`<sup>Required</sup> <a name="client_ca_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientCaTlsContainerRef"></a>

```python
client_ca_tls_container_ref: str
```

- *Type:* str

---

##### `client_timeout`<sup>Required</sup> <a name="client_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_pool_id`<sup>Required</sup> <a name="default_pool_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultPoolId"></a>

```python
default_pool_id: str
```

- *Type:* str

---

##### `default_tls_container_ref`<sup>Required</sup> <a name="default_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.defaultTlsContainerRef"></a>

```python
default_tls_container_ref: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `http2_enable`<sup>Required</sup> <a name="http2_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.http2Enable"></a>

```python
http2_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keep_alive_timeout`<sup>Required</sup> <a name="keep_alive_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.keepAliveTimeout"></a>

```python
keep_alive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

---

##### `member_retry_enable`<sup>Required</sup> <a name="member_retry_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberRetryEnable"></a>

```python
member_retry_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `member_timeout`<sup>Required</sup> <a name="member_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.memberTimeout"></a>

```python
member_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.protocolPort"></a>

```python
protocol_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_policy_id`<sup>Required</sup> <a name="security_policy_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.securityPolicyId"></a>

```python
security_policy_id: str
```

- *Type:* str

---

##### `sni_container_refs`<sup>Required</sup> <a name="sni_container_refs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniContainerRefs"></a>

```python
sni_container_refs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sni_match_algo`<sup>Required</sup> <a name="sni_match_algo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.sniMatchAlgo"></a>

```python
sni_match_algo: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tls_ciphers_policy`<sup>Required</sup> <a name="tls_ciphers_policy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tlsCiphersPolicy"></a>

```python
tls_ciphers_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV3Config <a name="LbListenerV3Config" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  loadbalancer_id: str,
  protocol: str,
  protocol_port: typing.Union[int, float],
  admin_state_up: typing.Union[bool, IResolvable] = None,
  advanced_forwarding: typing.Union[bool, IResolvable] = None,
  client_ca_tls_container_ref: str = None,
  client_timeout: typing.Union[int, float] = None,
  default_pool_id: str = None,
  default_tls_container_ref: str = None,
  description: str = None,
  http2_enable: typing.Union[bool, IResolvable] = None,
  id: str = None,
  insert_headers: LbListenerV3InsertHeaders = None,
  ip_group: LbListenerV3IpGroup = None,
  keep_alive_timeout: typing.Union[int, float] = None,
  member_retry_enable: typing.Union[bool, IResolvable] = None,
  member_timeout: typing.Union[int, float] = None,
  name: str = None,
  security_policy_id: str = None,
  sni_container_refs: typing.List[str] = None,
  sni_match_algo: str = None,
  tags: typing.Mapping[str] = None,
  tls_ciphers_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort">protocol_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp">admin_state_up</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding">advanced_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef">client_ca_tls_container_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId">default_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef">default_tls_container_ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#description LbListenerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable">http2_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders">insert_headers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | insert_headers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup">ip_group</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | ip_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout">keep_alive_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable">member_retry_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout">member_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#name LbListenerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId">security_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs">sni_container_refs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo">sni_match_algo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tags LbListenerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy">tls_ciphers_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}.

---

##### `protocol_port`<sup>Required</sup> <a name="protocol_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.protocolPort"></a>

```python
protocol_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}.

---

##### `admin_state_up`<sup>Optional</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.adminStateUp"></a>

```python
admin_state_up: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}.

---

##### `advanced_forwarding`<sup>Optional</sup> <a name="advanced_forwarding" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.advancedForwarding"></a>

```python
advanced_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}.

---

##### `client_ca_tls_container_ref`<sup>Optional</sup> <a name="client_ca_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientCaTlsContainerRef"></a>

```python
client_ca_tls_container_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}.

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}.

---

##### `default_pool_id`<sup>Optional</sup> <a name="default_pool_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultPoolId"></a>

```python
default_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}.

---

##### `default_tls_container_ref`<sup>Optional</sup> <a name="default_tls_container_ref" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.defaultTlsContainerRef"></a>

```python
default_tls_container_ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#description LbListenerV3#description}.

---

##### `http2_enable`<sup>Optional</sup> <a name="http2_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.http2Enable"></a>

```python
http2_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insert_headers`<sup>Optional</sup> <a name="insert_headers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.insertHeaders"></a>

```python
insert_headers: LbListenerV3InsertHeaders
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

insert_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#insert_headers LbListenerV3#insert_headers}

---

##### `ip_group`<sup>Optional</sup> <a name="ip_group" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.ipGroup"></a>

```python
ip_group: LbListenerV3IpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

ip_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}

---

##### `keep_alive_timeout`<sup>Optional</sup> <a name="keep_alive_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.keepAliveTimeout"></a>

```python
keep_alive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}.

---

##### `member_retry_enable`<sup>Optional</sup> <a name="member_retry_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberRetryEnable"></a>

```python
member_retry_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}.

---

##### `member_timeout`<sup>Optional</sup> <a name="member_timeout" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.memberTimeout"></a>

```python
member_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#name LbListenerV3#name}.

---

##### `security_policy_id`<sup>Optional</sup> <a name="security_policy_id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.securityPolicyId"></a>

```python
security_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}.

---

##### `sni_container_refs`<sup>Optional</sup> <a name="sni_container_refs" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniContainerRefs"></a>

```python
sni_container_refs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}.

---

##### `sni_match_algo`<sup>Optional</sup> <a name="sni_match_algo" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.sniMatchAlgo"></a>

```python
sni_match_algo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tags LbListenerV3#tags}.

---

##### `tls_ciphers_policy`<sup>Optional</sup> <a name="tls_ciphers_policy" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3Config.property.tlsCiphersPolicy"></a>

```python
tls_ciphers_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}.

---

### LbListenerV3InsertHeaders <a name="LbListenerV3InsertHeaders" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3InsertHeaders(
  forwarded_for_port: typing.Union[bool, IResolvable] = None,
  forwarded_host: typing.Union[bool, IResolvable] = None,
  forwarded_port: typing.Union[bool, IResolvable] = None,
  forward_elb_ip: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort">forwarded_for_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost">forwarded_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort">forwarded_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp">forward_elb_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}. |

---

##### `forwarded_for_port`<sup>Optional</sup> <a name="forwarded_for_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedForPort"></a>

```python
forwarded_for_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}.

---

##### `forwarded_host`<sup>Optional</sup> <a name="forwarded_host" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedHost"></a>

```python
forwarded_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}.

---

##### `forwarded_port`<sup>Optional</sup> <a name="forwarded_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardedPort"></a>

```python
forwarded_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}.

---

##### `forward_elb_ip`<sup>Optional</sup> <a name="forward_elb_ip" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders.property.forwardElbIp"></a>

```python
forward_elb_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}.

---

### LbListenerV3IpGroup <a name="LbListenerV3IpGroup" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3IpGroup(
  id: str,
  enable: typing.Union[bool, IResolvable] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#id LbListenerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#enable LbListenerV3#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#type LbListenerV3#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#id LbListenerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#enable LbListenerV3#enable}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/lb_listener_v3#type LbListenerV3#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV3InsertHeadersOutputReference <a name="LbListenerV3InsertHeadersOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3InsertHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort">reset_forwarded_for_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost">reset_forwarded_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort">reset_forwarded_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp">reset_forward_elb_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forwarded_for_port` <a name="reset_forwarded_for_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedForPort"></a>

```python
def reset_forwarded_for_port() -> None
```

##### `reset_forwarded_host` <a name="reset_forwarded_host" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedHost"></a>

```python
def reset_forwarded_host() -> None
```

##### `reset_forwarded_port` <a name="reset_forwarded_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardedPort"></a>

```python
def reset_forwarded_port() -> None
```

##### `reset_forward_elb_ip` <a name="reset_forward_elb_ip" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.resetForwardElbIp"></a>

```python
def reset_forward_elb_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput">forwarded_for_port_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput">forwarded_host_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput">forwarded_port_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput">forward_elb_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort">forwarded_for_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost">forwarded_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort">forwarded_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp">forward_elb_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarded_for_port_input`<sup>Optional</sup> <a name="forwarded_for_port_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPortInput"></a>

```python
forwarded_for_port_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarded_host_input`<sup>Optional</sup> <a name="forwarded_host_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHostInput"></a>

```python
forwarded_host_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarded_port_input`<sup>Optional</sup> <a name="forwarded_port_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPortInput"></a>

```python
forwarded_port_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_elb_ip_input`<sup>Optional</sup> <a name="forward_elb_ip_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIpInput"></a>

```python
forward_elb_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarded_for_port`<sup>Required</sup> <a name="forwarded_for_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedForPort"></a>

```python
forwarded_for_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarded_host`<sup>Required</sup> <a name="forwarded_host" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedHost"></a>

```python
forwarded_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forwarded_port`<sup>Required</sup> <a name="forwarded_port" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardedPort"></a>

```python
forwarded_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_elb_ip`<sup>Required</sup> <a name="forward_elb_ip" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.forwardElbIp"></a>

```python
forward_elb_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeadersOutputReference.property.internalValue"></a>

```python
internal_value: LbListenerV3InsertHeaders
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3InsertHeaders">LbListenerV3InsertHeaders</a>

---


### LbListenerV3IpGroupOutputReference <a name="LbListenerV3IpGroupOutputReference" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lb_listener_v3

lbListenerV3.LbListenerV3IpGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroupOutputReference.property.internalValue"></a>

```python
internal_value: LbListenerV3IpGroup
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbListenerV3.LbListenerV3IpGroup">LbListenerV3IpGroup</a>

---



