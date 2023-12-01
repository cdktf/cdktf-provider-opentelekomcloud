# `dcVirtualInterfaceV2` Submodule <a name="`dcVirtualInterfaceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DcVirtualInterfaceV2 <a name="DcVirtualInterfaceV2" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2 opentelekomcloud_dc_virtual_interface_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dc_virtual_interface_v2.DcVirtualInterfaceV2;

DcVirtualInterfaceV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bandwidth(java.lang.Number)
    .directConnectId(java.lang.String)
    .name(java.lang.String)
    .remoteEpGroupId(java.lang.String)
    .routeMode(java.lang.String)
    .type(java.lang.String)
    .virtualGatewayId(java.lang.String)
    .vlan(java.lang.Number)
//  .asn(java.lang.Number)
//  .bgpMd5(java.lang.String)
//  .description(java.lang.String)
//  .enableBfd(java.lang.Boolean)
//  .enableBfd(IResolvable)
//  .enableNqa(java.lang.Boolean)
//  .enableNqa(IResolvable)
//  .id(java.lang.String)
//  .lagId(java.lang.String)
//  .localGatewayV4Ip(java.lang.String)
//  .projectId(java.lang.String)
//  .remoteGatewayV4Ip(java.lang.String)
//  .serviceType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.directConnectId">directConnectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteEpGroupId">remoteEpGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.routeMode">routeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.virtualGatewayId">virtualGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.asn">asn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bgpMd5">bgpMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableBfd">enableBfd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableNqa">enableNqa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lagId">lagId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.localGatewayV4Ip">localGatewayV4Ip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteGatewayV4Ip">remoteGatewayV4Ip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bandwidth"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}.

---

##### `directConnectId`<sup>Required</sup> <a name="directConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.directConnectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}.

---

##### `remoteEpGroupId`<sup>Required</sup> <a name="remoteEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteEpGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}.

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.routeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}.

---

##### `virtualGatewayId`<sup>Required</sup> <a name="virtualGatewayId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.virtualGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.vlan"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.asn"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}.

---

##### `bgpMd5`<sup>Optional</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.bgpMd5"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}.

---

##### `enableBfd`<sup>Optional</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableBfd"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}.

---

##### `enableNqa`<sup>Optional</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.enableNqa"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lagId`<sup>Optional</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.lagId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}.

---

##### `localGatewayV4Ip`<sup>Optional</sup> <a name="localGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.localGatewayV4Ip"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}.

---

##### `remoteGatewayV4Ip`<sup>Optional</sup> <a name="remoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.remoteGatewayV4Ip"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.Initializer.parameter.serviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn">resetAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5">resetBgpMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd">resetEnableBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa">resetEnableNqa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId">resetLagId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip">resetLocalGatewayV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip">resetRemoteGatewayV4Ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetServiceType">resetServiceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAsn` <a name="resetAsn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetAsn"></a>

```java
public void resetAsn()
```

##### `resetBgpMd5` <a name="resetBgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetBgpMd5"></a>

```java
public void resetBgpMd5()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableBfd` <a name="resetEnableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableBfd"></a>

```java
public void resetEnableBfd()
```

##### `resetEnableNqa` <a name="resetEnableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetEnableNqa"></a>

```java
public void resetEnableNqa()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetId"></a>

```java
public void resetId()
```

##### `resetLagId` <a name="resetLagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLagId"></a>

```java
public void resetLagId()
```

##### `resetLocalGatewayV4Ip` <a name="resetLocalGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetLocalGatewayV4Ip"></a>

```java
public void resetLocalGatewayV4Ip()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRemoteGatewayV4Ip` <a name="resetRemoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetRemoteGatewayV4Ip"></a>

```java
public void resetRemoteGatewayV4Ip()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.resetServiceType"></a>

```java
public void resetServiceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dc_virtual_interface_v2.DcVirtualInterfaceV2;

DcVirtualInterfaceV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dc_virtual_interface_v2.DcVirtualInterfaceV2;

DcVirtualInterfaceV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dc_virtual_interface_v2.DcVirtualInterfaceV2;

DcVirtualInterfaceV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dc_virtual_interface_v2.DcVirtualInterfaceV2;

DcVirtualInterfaceV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DcVirtualInterfaceV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DcVirtualInterfaceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DcVirtualInterfaceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DcVirtualInterfaceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DcVirtualInterfaceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput">asnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput">bandwidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input">bgpMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput">directConnectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput">enableBfdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput">enableNqaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput">lagIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput">localGatewayV4IpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupIdInput">remoteEpGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput">remoteGatewayV4IpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput">routeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput">virtualGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput">vlanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn">asn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5">bgpMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId">directConnectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd">enableBfd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa">enableNqa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId">lagId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip">localGatewayV4Ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId">remoteEpGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip">remoteGatewayV4Ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode">routeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId">virtualGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asnInput"></a>

```java
public java.lang.Number getAsnInput();
```

- *Type:* java.lang.Number

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidthInput"></a>

```java
public java.lang.Number getBandwidthInput();
```

- *Type:* java.lang.Number

---

##### `bgpMd5Input`<sup>Optional</sup> <a name="bgpMd5Input" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5Input"></a>

```java
public java.lang.String getBgpMd5Input();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directConnectIdInput`<sup>Optional</sup> <a name="directConnectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectIdInput"></a>

```java
public java.lang.String getDirectConnectIdInput();
```

- *Type:* java.lang.String

---

##### `enableBfdInput`<sup>Optional</sup> <a name="enableBfdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfdInput"></a>

```java
public java.lang.Object getEnableBfdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableNqaInput`<sup>Optional</sup> <a name="enableNqaInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqaInput"></a>

```java
public java.lang.Object getEnableNqaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lagIdInput`<sup>Optional</sup> <a name="lagIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagIdInput"></a>

```java
public java.lang.String getLagIdInput();
```

- *Type:* java.lang.String

---

##### `localGatewayV4IpInput`<sup>Optional</sup> <a name="localGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4IpInput"></a>

```java
public java.lang.String getLocalGatewayV4IpInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `remoteEpGroupIdInput`<sup>Optional</sup> <a name="remoteEpGroupIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupIdInput"></a>

```java
public java.lang.String getRemoteEpGroupIdInput();
```

- *Type:* java.lang.String

---

##### `remoteGatewayV4IpInput`<sup>Optional</sup> <a name="remoteGatewayV4IpInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4IpInput"></a>

```java
public java.lang.String getRemoteGatewayV4IpInput();
```

- *Type:* java.lang.String

---

##### `routeModeInput`<sup>Optional</sup> <a name="routeModeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeModeInput"></a>

```java
public java.lang.String getRouteModeInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `virtualGatewayIdInput`<sup>Optional</sup> <a name="virtualGatewayIdInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayIdInput"></a>

```java
public java.lang.String getVirtualGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlanInput"></a>

```java
public java.lang.Number getVlanInput();
```

- *Type:* java.lang.Number

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bandwidth"></a>

```java
public java.lang.Number getBandwidth();
```

- *Type:* java.lang.Number

---

##### `bgpMd5`<sup>Required</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.bgpMd5"></a>

```java
public java.lang.String getBgpMd5();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `directConnectId`<sup>Required</sup> <a name="directConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.directConnectId"></a>

```java
public java.lang.String getDirectConnectId();
```

- *Type:* java.lang.String

---

##### `enableBfd`<sup>Required</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableBfd"></a>

```java
public java.lang.Object getEnableBfd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableNqa`<sup>Required</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.enableNqa"></a>

```java
public java.lang.Object getEnableNqa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.lagId"></a>

```java
public java.lang.String getLagId();
```

- *Type:* java.lang.String

---

##### `localGatewayV4Ip`<sup>Required</sup> <a name="localGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.localGatewayV4Ip"></a>

```java
public java.lang.String getLocalGatewayV4Ip();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `remoteEpGroupId`<sup>Required</sup> <a name="remoteEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteEpGroupId"></a>

```java
public java.lang.String getRemoteEpGroupId();
```

- *Type:* java.lang.String

---

##### `remoteGatewayV4Ip`<sup>Required</sup> <a name="remoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.remoteGatewayV4Ip"></a>

```java
public java.lang.String getRemoteGatewayV4Ip();
```

- *Type:* java.lang.String

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.routeMode"></a>

```java
public java.lang.String getRouteMode();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualGatewayId`<sup>Required</sup> <a name="virtualGatewayId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.virtualGatewayId"></a>

```java
public java.lang.String getVirtualGatewayId();
```

- *Type:* java.lang.String

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DcVirtualInterfaceV2Config <a name="DcVirtualInterfaceV2Config" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dc_virtual_interface_v2.DcVirtualInterfaceV2Config;

DcVirtualInterfaceV2Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bandwidth(java.lang.Number)
    .directConnectId(java.lang.String)
    .name(java.lang.String)
    .remoteEpGroupId(java.lang.String)
    .routeMode(java.lang.String)
    .type(java.lang.String)
    .virtualGatewayId(java.lang.String)
    .vlan(java.lang.Number)
//  .asn(java.lang.Number)
//  .bgpMd5(java.lang.String)
//  .description(java.lang.String)
//  .enableBfd(java.lang.Boolean)
//  .enableBfd(IResolvable)
//  .enableNqa(java.lang.Boolean)
//  .enableNqa(IResolvable)
//  .id(java.lang.String)
//  .lagId(java.lang.String)
//  .localGatewayV4Ip(java.lang.String)
//  .projectId(java.lang.String)
//  .remoteGatewayV4Ip(java.lang.String)
//  .serviceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth">bandwidth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId">directConnectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroupId">remoteEpGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode">routeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId">virtualGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn">asn</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5">bgpMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd">enableBfd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa">enableNqa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId">lagId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip">localGatewayV4Ip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip">remoteGatewayV4Ip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bandwidth"></a>

```java
public java.lang.Number getBandwidth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bandwidth DcVirtualInterfaceV2#bandwidth}.

---

##### `directConnectId`<sup>Required</sup> <a name="directConnectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.directConnectId"></a>

```java
public java.lang.String getDirectConnectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#direct_connect_id DcVirtualInterfaceV2#direct_connect_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#name DcVirtualInterfaceV2#name}.

---

##### `remoteEpGroupId`<sup>Required</sup> <a name="remoteEpGroupId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteEpGroupId"></a>

```java
public java.lang.String getRemoteEpGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_ep_group_id DcVirtualInterfaceV2#remote_ep_group_id}.

---

##### `routeMode`<sup>Required</sup> <a name="routeMode" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.routeMode"></a>

```java
public java.lang.String getRouteMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#route_mode DcVirtualInterfaceV2#route_mode}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#type DcVirtualInterfaceV2#type}.

---

##### `virtualGatewayId`<sup>Required</sup> <a name="virtualGatewayId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.virtualGatewayId"></a>

```java
public java.lang.String getVirtualGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#virtual_gateway_id DcVirtualInterfaceV2#virtual_gateway_id}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#vlan DcVirtualInterfaceV2#vlan}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.asn"></a>

```java
public java.lang.Number getAsn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#asn DcVirtualInterfaceV2#asn}.

---

##### `bgpMd5`<sup>Optional</sup> <a name="bgpMd5" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.bgpMd5"></a>

```java
public java.lang.String getBgpMd5();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#bgp_md5 DcVirtualInterfaceV2#bgp_md5}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#description DcVirtualInterfaceV2#description}.

---

##### `enableBfd`<sup>Optional</sup> <a name="enableBfd" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableBfd"></a>

```java
public java.lang.Object getEnableBfd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_bfd DcVirtualInterfaceV2#enable_bfd}.

---

##### `enableNqa`<sup>Optional</sup> <a name="enableNqa" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.enableNqa"></a>

```java
public java.lang.Object getEnableNqa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#enable_nqa DcVirtualInterfaceV2#enable_nqa}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#id DcVirtualInterfaceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lagId`<sup>Optional</sup> <a name="lagId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.lagId"></a>

```java
public java.lang.String getLagId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#lag_id DcVirtualInterfaceV2#lag_id}.

---

##### `localGatewayV4Ip`<sup>Optional</sup> <a name="localGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.localGatewayV4Ip"></a>

```java
public java.lang.String getLocalGatewayV4Ip();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#local_gateway_v4_ip DcVirtualInterfaceV2#local_gateway_v4_ip}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#project_id DcVirtualInterfaceV2#project_id}.

---

##### `remoteGatewayV4Ip`<sup>Optional</sup> <a name="remoteGatewayV4Ip" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.remoteGatewayV4Ip"></a>

```java
public java.lang.String getRemoteGatewayV4Ip();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#remote_gateway_v4_ip DcVirtualInterfaceV2#remote_gateway_v4_ip}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-opentelekomcloud.dcVirtualInterfaceV2.DcVirtualInterfaceV2Config.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/dc_virtual_interface_v2#service_type DcVirtualInterfaceV2#service_type}.

---



