# `dmsInstanceV2` Submodule <a name="`dmsInstanceV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsInstanceV2 <a name="DmsInstanceV2" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2 opentelekomcloud_dms_instance_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev2"

dmsinstancev2.NewDmsInstanceV2(scope Construct, id *string, config DmsInstanceV2Config) DmsInstanceV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config">DmsInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config">DmsInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetAccessUser">ResetAccessUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetEnablePublicip">ResetEnablePublicip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainBegin">ResetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainEnd">ResetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPartitionNum">ResetPartitionNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicBandwidth">ResetPublicBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicipId">ResetPublicipId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetSpecification">ResetSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts"></a>

```go
func PutTimeouts(value DmsInstanceV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

---

##### `ResetAccessUser` <a name="ResetAccessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetAccessUser"></a>

```go
func ResetAccessUser()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnablePublicip` <a name="ResetEnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetEnablePublicip"></a>

```go
func ResetEnablePublicip()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintainBegin` <a name="ResetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainBegin"></a>

```go
func ResetMaintainBegin()
```

##### `ResetMaintainEnd` <a name="ResetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetMaintainEnd"></a>

```go
func ResetMaintainEnd()
```

##### `ResetPartitionNum` <a name="ResetPartitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPartitionNum"></a>

```go
func ResetPartitionNum()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPublicBandwidth` <a name="ResetPublicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicBandwidth"></a>

```go
func ResetPublicBandwidth()
```

##### `ResetPublicipId` <a name="ResetPublicipId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetPublicipId"></a>

```go
func ResetPublicipId()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetSpecification` <a name="ResetSpecification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetSpecification"></a>

```go
func ResetSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev2"

dmsinstancev2.DmsInstanceV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev2"

dmsinstancev2.DmsInstanceV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev2"

dmsinstancev2.DmsInstanceV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connectAddress">ConnectAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nodeNum">NodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicAccessEnabled">PublicAccessEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicConnectAddress">PublicConnectAddress</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.resourceSpecCode">ResourceSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupName">SecurityGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.sslEnable">SslEnable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageResourceId">StorageResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetCidr">SubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetName">SubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference">DmsInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.totalStorageSpace">TotalStorageSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.usedStorageSpace">UsedStorageSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcName">VpcName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUserInput">AccessUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZonesInput">AvailableZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicipInput">EnablePublicipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBeginInput">MaintainBeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEndInput">MaintainEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNumInput">PartitionNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidthInput">PublicBandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipIdInput">PublicipIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specificationInput">SpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpaceInput">StorageSpaceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCodeInput">StorageSpecCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUser">AccessUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicip">EnablePublicip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEnd">MaintainEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNum">PartitionNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidth">PublicBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipId">PublicipId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicy">RetentionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specification">Specification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpace">StorageSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectAddress`<sup>Required</sup> <a name="ConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.connectAddress"></a>

```go
func ConnectAddress() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nodeNum"></a>

```go
func NodeNum() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PublicAccessEnabled`<sup>Required</sup> <a name="PublicAccessEnabled" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicAccessEnabled"></a>

```go
func PublicAccessEnabled() *string
```

- *Type:* *string

---

##### `PublicConnectAddress`<sup>Required</sup> <a name="PublicConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicConnectAddress"></a>

```go
func PublicConnectAddress() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceSpecCode`<sup>Required</sup> <a name="ResourceSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.resourceSpecCode"></a>

```go
func ResourceSpecCode() *string
```

- *Type:* *string

---

##### `SecurityGroupName`<sup>Required</sup> <a name="SecurityGroupName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupName"></a>

```go
func SecurityGroupName() *string
```

- *Type:* *string

---

##### `SslEnable`<sup>Required</sup> <a name="SslEnable" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.sslEnable"></a>

```go
func SslEnable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageResourceId`<sup>Required</sup> <a name="StorageResourceId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageResourceId"></a>

```go
func StorageResourceId() *string
```

- *Type:* *string

---

##### `SubnetCidr`<sup>Required</sup> <a name="SubnetCidr" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetCidr"></a>

```go
func SubnetCidr() *string
```

- *Type:* *string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetName"></a>

```go
func SubnetName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeouts"></a>

```go
func Timeouts() DmsInstanceV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference">DmsInstanceV2TimeoutsOutputReference</a>

---

##### `TotalStorageSpace`<sup>Required</sup> <a name="TotalStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.totalStorageSpace"></a>

```go
func TotalStorageSpace() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsedStorageSpace`<sup>Required</sup> <a name="UsedStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.usedStorageSpace"></a>

```go
func UsedStorageSpace() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcName"></a>

```go
func VpcName() *string
```

- *Type:* *string

---

##### `AccessUserInput`<sup>Optional</sup> <a name="AccessUserInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUserInput"></a>

```go
func AccessUserInput() *string
```

- *Type:* *string

---

##### `AvailableZonesInput`<sup>Optional</sup> <a name="AvailableZonesInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZonesInput"></a>

```go
func AvailableZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnablePublicipInput`<sup>Optional</sup> <a name="EnablePublicipInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicipInput"></a>

```go
func EnablePublicipInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintainBeginInput`<sup>Optional</sup> <a name="MaintainBeginInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBeginInput"></a>

```go
func MaintainBeginInput() *string
```

- *Type:* *string

---

##### `MaintainEndInput`<sup>Optional</sup> <a name="MaintainEndInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEndInput"></a>

```go
func MaintainEndInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionNumInput`<sup>Optional</sup> <a name="PartitionNumInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNumInput"></a>

```go
func PartitionNumInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `PublicBandwidthInput`<sup>Optional</sup> <a name="PublicBandwidthInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidthInput"></a>

```go
func PublicBandwidthInput() *f64
```

- *Type:* *f64

---

##### `PublicipIdInput`<sup>Optional</sup> <a name="PublicipIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipIdInput"></a>

```go
func PublicipIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SpecificationInput`<sup>Optional</sup> <a name="SpecificationInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specificationInput"></a>

```go
func SpecificationInput() *string
```

- *Type:* *string

---

##### `StorageSpaceInput`<sup>Optional</sup> <a name="StorageSpaceInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpaceInput"></a>

```go
func StorageSpaceInput() *f64
```

- *Type:* *f64

---

##### `StorageSpecCodeInput`<sup>Optional</sup> <a name="StorageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCodeInput"></a>

```go
func StorageSpecCodeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AccessUser`<sup>Required</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.accessUser"></a>

```go
func AccessUser() *string
```

- *Type:* *string

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.availableZones"></a>

```go
func AvailableZones() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnablePublicip`<sup>Required</sup> <a name="EnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.enablePublicip"></a>

```go
func EnablePublicip() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintainBegin`<sup>Required</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainBegin"></a>

```go
func MaintainBegin() *string
```

- *Type:* *string

---

##### `MaintainEnd`<sup>Required</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.maintainEnd"></a>

```go
func MaintainEnd() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionNum`<sup>Required</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.partitionNum"></a>

```go
func PartitionNum() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `PublicBandwidth`<sup>Required</sup> <a name="PublicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicBandwidth"></a>

```go
func PublicBandwidth() *f64
```

- *Type:* *f64

---

##### `PublicipId`<sup>Required</sup> <a name="PublicipId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.publicipId"></a>

```go
func PublicipId() *[]*string
```

- *Type:* *[]*string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.retentionPolicy"></a>

```go
func RetentionPolicy() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.specification"></a>

```go
func Specification() *string
```

- *Type:* *string

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpace"></a>

```go
func StorageSpace() *f64
```

- *Type:* *f64

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.storageSpecCode"></a>

```go
func StorageSpecCode() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsInstanceV2Config <a name="DmsInstanceV2Config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev2"

&dmsinstancev2.DmsInstanceV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailableZones: *[]*string,
	Engine: *string,
	EngineVersion: *string,
	Name: *string,
	ProductId: *string,
	SecurityGroupId: *string,
	StorageSpace: *f64,
	StorageSpecCode: *string,
	SubnetId: *string,
	VpcId: *string,
	AccessUser: *string,
	Description: *string,
	EnablePublicip: interface{},
	Id: *string,
	MaintainBegin: *string,
	MaintainEnd: *string,
	PartitionNum: *f64,
	Password: *string,
	PublicBandwidth: *f64,
	PublicipId: *[]*string,
	RetentionPolicy: *string,
	Specification: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#available_zones DmsInstanceV2#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#engine DmsInstanceV2#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#engine_version DmsInstanceV2#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#name DmsInstanceV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#product_id DmsInstanceV2#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpace">StorageSpace</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#storage_space DmsInstanceV2#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.accessUser">AccessUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#access_user DmsInstanceV2#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#description DmsInstanceV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.enablePublicip">EnablePublicip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#id DmsInstanceV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainEnd">MaintainEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.partitionNum">PartitionNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#partition_num DmsInstanceV2#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#password DmsInstanceV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicBandwidth">PublicBandwidth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicipId">PublicipId</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.retentionPolicy">RetentionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.specification">Specification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#specification DmsInstanceV2#specification}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#tags DmsInstanceV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.availableZones"></a>

```go
AvailableZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#available_zones DmsInstanceV2#available_zones}.

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#engine DmsInstanceV2#engine}.

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#engine_version DmsInstanceV2#engine_version}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#name DmsInstanceV2#name}.

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#product_id DmsInstanceV2#product_id}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#security_group_id DmsInstanceV2#security_group_id}.

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpace"></a>

```go
StorageSpace *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#storage_space DmsInstanceV2#storage_space}.

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.storageSpecCode"></a>

```go
StorageSpecCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#storage_spec_code DmsInstanceV2#storage_spec_code}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#subnet_id DmsInstanceV2#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#vpc_id DmsInstanceV2#vpc_id}.

---

##### `AccessUser`<sup>Optional</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.accessUser"></a>

```go
AccessUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#access_user DmsInstanceV2#access_user}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#description DmsInstanceV2#description}.

---

##### `EnablePublicip`<sup>Optional</sup> <a name="EnablePublicip" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.enablePublicip"></a>

```go
EnablePublicip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#enable_publicip DmsInstanceV2#enable_publicip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#id DmsInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintainBegin`<sup>Optional</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainBegin"></a>

```go
MaintainBegin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#maintain_begin DmsInstanceV2#maintain_begin}.

---

##### `MaintainEnd`<sup>Optional</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.maintainEnd"></a>

```go
MaintainEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#maintain_end DmsInstanceV2#maintain_end}.

---

##### `PartitionNum`<sup>Optional</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.partitionNum"></a>

```go
PartitionNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#partition_num DmsInstanceV2#partition_num}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#password DmsInstanceV2#password}.

---

##### `PublicBandwidth`<sup>Optional</sup> <a name="PublicBandwidth" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicBandwidth"></a>

```go
PublicBandwidth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#public_bandwidth DmsInstanceV2#public_bandwidth}.

---

##### `PublicipId`<sup>Optional</sup> <a name="PublicipId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.publicipId"></a>

```go
PublicipId *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#publicip_id DmsInstanceV2#publicip_id}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.retentionPolicy"></a>

```go
RetentionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#retention_policy DmsInstanceV2#retention_policy}.

---

##### `Specification`<sup>Optional</sup> <a name="Specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.specification"></a>

```go
Specification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#specification DmsInstanceV2#specification}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#tags DmsInstanceV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Config.property.timeouts"></a>

```go
Timeouts DmsInstanceV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts">DmsInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#timeouts DmsInstanceV2#timeouts}

---

### DmsInstanceV2Timeouts <a name="DmsInstanceV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev2"

&dmsinstancev2.DmsInstanceV2Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#create DmsInstanceV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#delete DmsInstanceV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#update DmsInstanceV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#create DmsInstanceV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#delete DmsInstanceV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v2#update DmsInstanceV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsInstanceV2TimeoutsOutputReference <a name="DmsInstanceV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev2"

dmsinstancev2.NewDmsInstanceV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsInstanceV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dmsInstanceV2.DmsInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



