# `imagesImageV2` Submodule <a name="`imagesImageV2` Submodule" id="@cdktf/provider-opentelekomcloud.imagesImageV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagesImageV2 <a name="ImagesImageV2" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2 opentelekomcloud_images_image_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/imagesimagev2"

imagesimagev2.NewImagesImageV2(scope Construct, id *string, config ImagesImageV2Config) ImagesImageV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config">ImagesImageV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config">ImagesImageV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageCachePath">ResetImageCachePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageSourceUrl">ResetImageSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetLocalFilePath">ResetLocalFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinDiskGb">ResetMinDiskGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinRamMb">ResetMinRamMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetProtected">ResetProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.putTimeouts"></a>

```go
func PutTimeouts(value ImagesImageV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetId"></a>

```go
func ResetId()
```

##### `ResetImageCachePath` <a name="ResetImageCachePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageCachePath"></a>

```go
func ResetImageCachePath()
```

##### `ResetImageSourceUrl` <a name="ResetImageSourceUrl" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetImageSourceUrl"></a>

```go
func ResetImageSourceUrl()
```

##### `ResetLocalFilePath` <a name="ResetLocalFilePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetLocalFilePath"></a>

```go
func ResetLocalFilePath()
```

##### `ResetMinDiskGb` <a name="ResetMinDiskGb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinDiskGb"></a>

```go
func ResetMinDiskGb()
```

##### `ResetMinRamMb` <a name="ResetMinRamMb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetMinRamMb"></a>

```go
func ResetMinRamMb()
```

##### `ResetProtected` <a name="ResetProtected" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetProtected"></a>

```go
func ResetProtected()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.resetVisibility"></a>

```go
func ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/imagesimagev2"

imagesimagev2.ImagesImageV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/imagesimagev2"

imagesimagev2.ImagesImageV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/imagesimagev2"

imagesimagev2.ImagesImageV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.sizeBytes">SizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.updateAt">UpdateAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormatInput">ContainerFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormatInput">DiskFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePathInput">ImageCachePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput">ImageSourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePathInput">LocalFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGbInput">MinDiskGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMbInput">MinRamMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protectedInput">ProtectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormat">ContainerFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormat">DiskFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePath">ImageCachePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrl">ImageSourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePath">LocalFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGb">MinDiskGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMb">MinRamMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protected">Protected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.sizeBytes"></a>

```go
func SizeBytes() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeouts"></a>

```go
func Timeouts() ImagesImageV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a>

---

##### `UpdateAt`<sup>Required</sup> <a name="UpdateAt" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.updateAt"></a>

```go
func UpdateAt() *string
```

- *Type:* *string

---

##### `ContainerFormatInput`<sup>Optional</sup> <a name="ContainerFormatInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormatInput"></a>

```go
func ContainerFormatInput() *string
```

- *Type:* *string

---

##### `DiskFormatInput`<sup>Optional</sup> <a name="DiskFormatInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormatInput"></a>

```go
func DiskFormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageCachePathInput`<sup>Optional</sup> <a name="ImageCachePathInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePathInput"></a>

```go
func ImageCachePathInput() *string
```

- *Type:* *string

---

##### `ImageSourceUrlInput`<sup>Optional</sup> <a name="ImageSourceUrlInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput"></a>

```go
func ImageSourceUrlInput() *string
```

- *Type:* *string

---

##### `LocalFilePathInput`<sup>Optional</sup> <a name="LocalFilePathInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePathInput"></a>

```go
func LocalFilePathInput() *string
```

- *Type:* *string

---

##### `MinDiskGbInput`<sup>Optional</sup> <a name="MinDiskGbInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGbInput"></a>

```go
func MinDiskGbInput() *f64
```

- *Type:* *f64

---

##### `MinRamMbInput`<sup>Optional</sup> <a name="MinRamMbInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMbInput"></a>

```go
func MinRamMbInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectedInput`<sup>Optional</sup> <a name="ProtectedInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protectedInput"></a>

```go
func ProtectedInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `ContainerFormat`<sup>Required</sup> <a name="ContainerFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.containerFormat"></a>

```go
func ContainerFormat() *string
```

- *Type:* *string

---

##### `DiskFormat`<sup>Required</sup> <a name="DiskFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.diskFormat"></a>

```go
func DiskFormat() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageCachePath`<sup>Required</sup> <a name="ImageCachePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageCachePath"></a>

```go
func ImageCachePath() *string
```

- *Type:* *string

---

##### `ImageSourceUrl`<sup>Required</sup> <a name="ImageSourceUrl" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.imageSourceUrl"></a>

```go
func ImageSourceUrl() *string
```

- *Type:* *string

---

##### `LocalFilePath`<sup>Required</sup> <a name="LocalFilePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.localFilePath"></a>

```go
func LocalFilePath() *string
```

- *Type:* *string

---

##### `MinDiskGb`<sup>Required</sup> <a name="MinDiskGb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minDiskGb"></a>

```go
func MinDiskGb() *f64
```

- *Type:* *f64

---

##### `MinRamMb`<sup>Required</sup> <a name="MinRamMb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.minRamMb"></a>

```go
func MinRamMb() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.protected"></a>

```go
func Protected() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagesImageV2Config <a name="ImagesImageV2Config" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/imagesimagev2"

&imagesimagev2.ImagesImageV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerFormat: *string,
	DiskFormat: *string,
	Name: *string,
	Id: *string,
	ImageCachePath: *string,
	ImageSourceUrl: *string,
	LocalFilePath: *string,
	MinDiskGb: *f64,
	MinRamMb: *f64,
	Protected: interface{},
	Region: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5.imagesImageV2.ImagesImageV2Timeouts,
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.containerFormat">ContainerFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#container_format ImagesImageV2#container_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.diskFormat">DiskFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#disk_format ImagesImageV2#disk_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#name ImagesImageV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#id ImagesImageV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageCachePath">ImageCachePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl">ImageSourceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#image_source_url ImagesImageV2#image_source_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.localFilePath">LocalFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#local_file_path ImagesImageV2#local_file_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minDiskGb">MinDiskGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minRamMb">MinRamMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.protected">Protected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#protected ImagesImageV2#protected}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#region ImagesImageV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#tags ImagesImageV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.visibility">Visibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#visibility ImagesImageV2#visibility}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerFormat`<sup>Required</sup> <a name="ContainerFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.containerFormat"></a>

```go
ContainerFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#container_format ImagesImageV2#container_format}.

---

##### `DiskFormat`<sup>Required</sup> <a name="DiskFormat" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.diskFormat"></a>

```go
DiskFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#disk_format ImagesImageV2#disk_format}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#name ImagesImageV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#id ImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageCachePath`<sup>Optional</sup> <a name="ImageCachePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageCachePath"></a>

```go
ImageCachePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}.

---

##### `ImageSourceUrl`<sup>Optional</sup> <a name="ImageSourceUrl" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl"></a>

```go
ImageSourceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#image_source_url ImagesImageV2#image_source_url}.

---

##### `LocalFilePath`<sup>Optional</sup> <a name="LocalFilePath" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.localFilePath"></a>

```go
LocalFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#local_file_path ImagesImageV2#local_file_path}.

---

##### `MinDiskGb`<sup>Optional</sup> <a name="MinDiskGb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minDiskGb"></a>

```go
MinDiskGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}.

---

##### `MinRamMb`<sup>Optional</sup> <a name="MinRamMb" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.minRamMb"></a>

```go
MinRamMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}.

---

##### `Protected`<sup>Optional</sup> <a name="Protected" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.protected"></a>

```go
Protected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#protected ImagesImageV2#protected}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#region ImagesImageV2#region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#tags ImagesImageV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.timeouts"></a>

```go
Timeouts ImagesImageV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#timeouts ImagesImageV2#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Config.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#visibility ImagesImageV2#visibility}.

---

### ImagesImageV2Timeouts <a name="ImagesImageV2Timeouts" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/imagesimagev2"

&imagesimagev2.ImagesImageV2Timeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#create ImagesImageV2#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/images_image_v2#create ImagesImageV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagesImageV2TimeoutsOutputReference <a name="ImagesImageV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v5/imagesimagev2"

imagesimagev2.NewImagesImageV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagesImageV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



